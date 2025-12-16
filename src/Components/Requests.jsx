import React from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addRequests, removeRequests } from '../utils/RequestsSlice';
import { useSelector } from 'react-redux';


const Requests = () => {

  const requests = useSelector((store) => store.requests)
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try{
      await axios.post(BASE_URL+ "/request/review/"+status+"/" + _id,
        {},
        { withCredentials: true }
      )
      dispatch(removeRequests(_id))

    }
    catch(error) {
      console.log(error);
    }
  }




  const fetchRequests = async () => {
    try{
       const res = await axios.get(
      BASE_URL + "/user/requests/received",
  { withCredentials: true }
);

      console.log(res.data.data);
      dispatch(addRequests(res.data.data));
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRequests();
  }, [])

  if(!requests) return;

  if(requests.length === 0) return <h1 className='flex justify-center my-10'>No Requests Found!!</h1>

  return (
       <div className='text-center my-10'>
      <h1 className='text-bold text-white text-3xl'>Connection Requests</h1>


      {requests.map((request) => {

        const {_id, firstName, lastName, photoUrl, age, gender, about} = request.fromUserId;

        return (
            <div key={_id} className='flex m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto items-center flex-row justify-between'>
              <div> 
                 <img alt='photo' className='w-20 h-20 rounded-full' src={photoUrl}/>
              </div>
                <div className='text-left mx-6'>
                  <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                  {age && gender && <p>{age + ", " + gender}</p>}
                  <p>{about}</p>
                  </div>
                  <div className='ml-auto'>
                    <button className='btn btn-sm bg-secondary m-2 px-4 py-2' onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                    <button className='btn btn-sm bg-primary m-2 px-5 py-2' onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                  </div>
                

          </div>
          )  
      }

         
      )}
    </div>
  )
}

export default Requests
