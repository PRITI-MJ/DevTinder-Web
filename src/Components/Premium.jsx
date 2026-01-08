import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios';
import { useState} from 'react';

const Premium = () => {

    const [isPremium, setIsPremium] = useState(false);
      useEffect(() => {
    verifyPremiumUser();
    }, []);
    const verifyPremiumUser = async () => {
        const res = await axios.get( BASE_URL + "/payment/verify",
        { withCredentials: true }
    );

            console.log(res.data.isPremium);
            if(res.data.isPremium){
                setIsPremium(true);
            }

    
    };




    const handleBuyClick = async (type) => {
        const order = await axios.post(BASE_URL+"/payment/create", 
            { membershipType: type }
            , { withCredentials: true });
    

    //It should open a payment gateway like Razorpay dialogue box to complete the payment process

        const { keyId, amount, currency, notes, orderId} = order.data;


        const options = {
            "key": keyId, 
            amount,
            currency,
            name: "devTinder",
            description: "Connect to other developers",
            order_id: orderId,
            prefill : {
                name: notes.firstName + " " + notes.lastName,
                email: notes.email,
                contact: "9999999999"
            },
            theme: {
                color: "#E37254"
            },
            handler : verifyPremiumUser,
        };
    const rzp = window.Razorpay(options);
    rzp.open();

    }

    return (
        !isPremium ? (<div className='m-10'>
            <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
                <h1 className='font-bold text-3xl'>Silver Membership</h1>
                <ul>
                    <li> - Chat with other people</li>
                    <li> - 100 connection Requests per day</li>
                    <li> - Blue Tick</li>
                    <li> - 3 Months</li>
                </ul>
                <button onClick={() => handleBuyClick("silver")} className='btn bg-secondary p-2'>Buy Silver</button>
            
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
                <h1 className='font-bold text-3xl'>Gold Membership</h1>
                <ul>
                    <li> - Chat with other people</li>
                    <li> - Infinite connection Requests per day</li>
                    <li> - Blue Tick</li>
                    <li> - 6 Months</li>
                </ul>
                <button onClick={() => handleBuyClick("gold")} className='btn bg-primary p-2'>Buy Gold</button>
                </div>
            </div>
        </div>) : 
       (<div className='m-10 font-bold text-2xl flex justify-center items-center'>
            You are already a Premium User!
        </div>)
    )
    }
export default Premium
