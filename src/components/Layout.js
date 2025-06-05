import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout(){

    const [login, setLogin] = useState(false);
    return(
        <>
        <div>
            {login? <p>Logged in, Now you can enter Playground</p> : <p>You are not authenticated, Please login first</p>}
        </div>
        <ul>
            <li><Link to="/playground">PlayGround</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        <p>Login</p>
        <button onClick={()=>{setLogin(!login)}}>{login? "Log Out ":"Log In"}</button>
        </>
    )
}