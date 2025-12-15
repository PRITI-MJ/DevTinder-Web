import React from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';


const EditProfile = ({User}) => {
 const [firstName, setFirstName] = useState(User.data.firstName || '');
 const [lastName, setLastName] = useState(User.data.lastName || '');
 const [age, setAge] = useState(User.data.age || '');
 const [gender, setGender] = useState(User.data.gender || '');
 const [about, setAbout] = useState(User.data.about || '');
 const [photoUrl, setPhotoUrl] = useState(User.data.photoUrl || ''); 
 const [skills, setSkills] = useState(User.data.skills || '');
 const [error, setError] = useState("");
 const dispatch = useDispatch();
 const [showToast, setShowToast] = useState(false); 

 const saveProfile = async () => {
    //Clear previous error
    setError("");
    try{
        const res = await axios.patch(BASE_URL + "/profile/edit",
        {
        firstName,
        lastName,
        photoUrl,
        age,
        gender,
        about,
        skills
        }, {withCredentials: true}
        );
        dispatch(addUser(res?.data));
        setShowToast(true);
            setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }
    catch(error){
        setError(error?.response?.data || "Something went wrong!");
    }   
 };

  return (
    <>
    <div className='flex justify-center my-10'>
<div className='flex justify-center my-10 mx-10'>
 <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Edit Profile</h2>
    <div>
<div className='pt-4 pb-5'>
<span className='label-text'>FirstName</span>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="First Name" 
  value={firstName} 
  onChange={(e) => setFirstName(e.target.value)}
  />
</label>
</div>

<div className='pt-1 pb-4'>
<span className='label-text'>LastName</span>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Last Name" 
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  />
</label>
</div>

<div className='pt-1 pb-4'>
<span className='label-text'>PhotoURL</span>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Photo URL" 
  value={photoUrl}
  onChange={(e) => setPhotoUrl(e.target.value)}
  />
</label>
</div>

<div className='pt-1 pb-4'>
<span className='label-text'>Age</span>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Age" 
  value={age}
  onChange={(e) => setAge(e.target.value)}
  />
</label>
</div>

<div className='pt-1 pb-4'>
<span className='label-text'>About</span>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="About" 
  value={about}
  onChange={(e) => setAbout(e.target.value)}
  />
</label>
</div>

<div className='pt-1 pb-4'>
<span className='label-text'>Gender</span>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Gender" 
  value={gender}
  onChange={(e) => setGender(e.target.value)}
  />
</label>
</div>

<div className='pt-1 pb-4'>
<span className='label-text'>Skills</span>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Skills" 
  value={skills}
  onChange={(e) => setSkills(e.target.value)}
  />
</label>
</div>

    </div>
    <p className='text-red-500'>{error}</p>
    <div className="card-actions justify-center">
      <button className="btn bg-primary p-4" onClick={saveProfile}>Save Profile</button>
    </div>
  </div>
</div>
</div>
<div>

</div>
<div className='mt-14 pt-14'>
    <UserCard user={{firstName, lastName, about, photoUrl, age, gender}}/>
</div>
</div>
{showToast && (<div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>Profile saved Succesfully!!!</span>
  </div>
</div>)}
</>

  )
}

export default EditProfile
