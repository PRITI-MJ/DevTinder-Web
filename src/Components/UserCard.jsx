
import React from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';


const UserCard = ({user}) => {
    const {_id, firstName, lastName, photoUrl, age, gender, about} = user;
    const dispatch = useDispatch();

    
    const handleSendRequest = async (status, userId) => {
      try{
        await axios.post(BASE_URL + "/request/send/"+status+"/"+ userId,
          {},
          {withCredentials: true}
        )

        dispatch(removeUserFromFeed(userId));
      }
      catch(error) {
        console.log(error);
      }
    }


  return (
      <div className="card bg-base-300 w-96 shadow-sm h-300 mx-auto mb-10">
  <figure>
    <img
      src={photoUrl} alt='photo'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    { (age || gender) && <p>{age + ", " + gender}</p>}
    <p>{about}</p>
    
    <div className="card-actions justify-end justify-center gap-14">
      <button className="btn bg-primary py-4 px-8" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
      <button className="btn bg-secondary p-5" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
