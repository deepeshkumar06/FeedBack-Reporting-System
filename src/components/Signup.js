import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const  Signup =() =>{
    const [username,setuserName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const navigate = useNavigate()

    const handlesignup=()=>{
        axios.post("http://localhost:3001/user",{"username":
        username,"email":email,"password":password})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        navigate('/login')
    }

    return(
        <div className="body">
   <div className='login-container'>

     <form action="" onSubmit={handlesignup} className='signupform'>
        <label>Username:</label>
    <input type='text' value={username} onChange={(e)=>
  {setuserName(e.target.value)}} required/><br></br>
   
   <label>Password:</label>
    <input type='password' value={password} onChange={(e)=>
  {setPassword(e.target.value)}} required/><br></br>
  
  <label>Email:</label>
    <input type='text' value={email} onChange={(e)=>
  {setEmail(e.target.value)}} required/><br></br>

  <button type='submit'>Signup</button><br></br>

     </form>
<Link to="/login">Already have an account? login</Link>
   </div>
   </div>
    );
}