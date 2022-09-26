import axios from 'axios'
import React, { useState } from 'react'
import "./Login.css"

const Login = () => {

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

  const login = () => {
    axios.post("http://localhost:8080/login", user)
    .then( res => console.log(res))
  }

  return (
    <div className='login'>
      {console.log("user", user)}
      <h1>login</h1>
      <input type="email" name='email' value={user.email} onChange={handleChange} placeholder='Enter your email' />
      <input type="password" name='password' value={user.password} onChange={handleChange}  placeholder='password'/>
      <div className='btn' onClick={login}>Login</div>
      <div>or</div>
      <div className='btn'>Register</div>
    </div>
  )
}

export default Login
