import React, {useState} from "react";
import {LOGO_URL} from "../utils/constants"
const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <div className="logContainer">
                <img className="logo"
                     src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Cart</li>
                    {
                        isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}> Logout </button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
                    }
                </ul>

            </div>
        </div>
    )
}

export default Header;
