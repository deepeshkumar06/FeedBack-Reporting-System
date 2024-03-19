import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseAuth } from './Auth'
import './Style.css'

export default function Nav() {
    const auth = UseAuth();
  return (
  <div className='header'>
    <div className="logo">
        <img src="https://th.bing.com/th/id/OIP.N5KvjwRSnCQUiuJvZPxdlQHaHa?rs=1&pid=ImgDetMain" alt="" height={50} width={50}/>
        <h1>Feedback Reporting System</h1>
    </div>
    <div className='Navbar'>
        <NavLink to={'/'}>Home</NavLink>
       <NavLink to={'/user'}>Profile</NavLink> 
        { auth.user &&  <NavLink to={'/feedback'}>Users</NavLink>}
        { auth.user === 'admin' && <NavLink to={'/admin'} >Admin</NavLink>}
        { !auth.user &&  <NavLink to='/login'>Login</NavLink>}
        { !auth.user && <NavLink to='/signup'>Signup</NavLink>}
    </div>
    </div>
  )
}
