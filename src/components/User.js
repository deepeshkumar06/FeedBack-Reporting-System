import React from "react";
import { UseAuth } from "./Auth";

const User = ()=>

{
    const auth=UseAuth()
    const handleLogout=()=>{
    auth.Logout()
}
return(
    <div className="profile">
        <img src="https://th.bing.com/th/id/OIP.YgN6-oQ4KzYkxJScaAZ4jgHaHa?w=211&h=211&c=7&r=0&o=5&cb=11&pid=1.7" alt="" width={50} height={50}/><h1>Welcome To The Page<br></br></h1>
        <h3>UserName : {auth.user}</h3>
        <button onClick={handleLogout}>Logout</button>
    </div>
)
}
export default User