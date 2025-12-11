
import React from 'react'


const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, age, gender, about} = user;
    console.log(user)
  return (
      <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl} alt='photo'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    { (age || gender) && <p>{age + ", " + gender}</p>}
    <p>{about}</p>
    
    <div className="card-actions justify-end justify-center gap-14">
      <button className="btn bg-primary py-4 px-8">Ignore</button>
      <button className="btn bg-secondary p-5">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
