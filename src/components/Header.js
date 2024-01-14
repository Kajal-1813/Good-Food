import { IMG_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import {useSelector} from "react-redux";

const Header = () => {
    const [btn,setBtn] = useState("Login");
    const data = useContext(userContext);
    const status = useOnlineStatus();
    const cartItems = useSelector((store)=> store.cart.item);
    console.log(cartItems);
    return (

        <div className="flex justify-between bg-pink-200 shadow-lg">
            <div className="logo-container">
                <img className="w-36" src= {IMG_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">  
                <li className="px-4"> <Link to="/">Home</Link></li>
                <li className="px-4"><Link to ="/About">About Us</Link></li>
                <li className="px-4"><Link to ="/Contact">Contact Us</Link></li>
                <li className="px-4" ><Link to="/Cart">🛒({cartItems.length})</Link></li>
                <li className="px-4" >{data.loggedInUser}</li>
                <li className="px-4">{status? "✅":"🔴"}</li>  
                <button className="login"  onClick={()=> {
                    btn === "Login"? setBtn("LogOut"): setBtn("Login");
                }}>{btn}</button>
                </ul>
            </div>
        
        </div>

    )
}

export default Header;