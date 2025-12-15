import React from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addConnection } from '../utils/ConnectionSlice';
import { useSelector } from 'react-redux';

const Connections = () => {

    const connections = useSelector((store) => store.connection);
    const dispatch = useDispatch();
    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections",
                { withCredentials: true }
            )

            console.log(res.data);
            dispatch(addConnection(res.data));
        }
        catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchConnections();
    },[])

    if(!connections) {
      return;
    }

    if(connections.length === 0) return <h1>No Connections Found!!</h1>


  return (
    <div className='flex justify-center my-10'>
      <h1 className='text-bold text-2xl'>Connections</h1>
      {connections.map((connection) => (
          <div>
            {connection.firstName} 
          </div>
      ))}
    </div>
  )
}

export default Connections
