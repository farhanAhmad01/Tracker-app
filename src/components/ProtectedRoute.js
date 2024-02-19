import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/authSlice'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({component : Component, name, ...rest}) => {
  const {user} = useSelector(selectUser)

  if((name === "login" || name === "signup" ) && user){
    return <Navigate to="/" />
  }

  if(name === "login" || name === "signup"){
    return <Component />
  }

  return (
    <>
       {user ? <Component {...rest} /> : <Navigate to={"/"} />} 
    </>
  )
}

export default ProtectedRoute