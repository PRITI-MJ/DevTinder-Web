import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const User = useSelector((state) => state.user)
  return (
    User && (
    <div>
      <EditProfile User={User}/>
    </div>
    )
  )
}

export default Profile
