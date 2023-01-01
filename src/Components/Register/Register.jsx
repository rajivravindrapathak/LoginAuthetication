import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
import { Link } from 'react-router-dom'

const Register = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })
 
  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if( name && email && password && (password === reEnterPassword)) {
       axios.post("http://localhost:8080/register", user)
       .then( res => console.log(res))
    } else {
      alert("invalied input")
    }
  }

  return (
    <div className='register'>
      {console.log("user", user)}
      <h1>register</h1>
      <input type="text" name='name' value={user.name} placeholder='your name' onChange={handleChange} />
      <input type="email" name='email' value={user.email} placeholder='your email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder='password' onChange={handleChange} />
      <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder='reEnter password' onChange={handleChange} />
      <div className='btn' onClick={register}>Register</div>
      <div>or</div>
      <div className='btn'> <Link id='sinup' to="signup">Login</Link></div>
   </div>
  )
}

export default Register
