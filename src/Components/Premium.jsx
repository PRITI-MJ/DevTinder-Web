import React from 'react'

const Premium = () => {
  return (
    <div className='m-10'>
        <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
            <h1>Silver Membership</h1>
            <ul>
                <li>. Chat with other people</li>
                <li>. 100 connection Requests per day</li>
                <li>. Blue Tick</li>
            </ul>
         
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"><h1>Gold Membership</h1></div>
        </div>
    </div>
  )
}

export default Premium
