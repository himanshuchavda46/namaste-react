import React, {useState} from "react";
import {LOGO_URL} from "../utils/constants"
import foodvilla from "../assets/img/foodvilla.png"
import {Link} from "react-router-dom"
const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <div className="logContainer">
                <img className="logo"
                     src={foodvilla}/>
            </div>
            <div className="nav-items">
                <ul>

                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                           About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                           Contact us
                        </Link>
                    </li>
                    {
                        isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)} className="p-2 bg-black text-white"> Logout </button> : <button onClick={()=>setIsLoggedIn(true)} className="p-2 bg-black text-white">Login</button>
                    }
                </ul>

            </div>
        </div>
    )
}

export default Header;
