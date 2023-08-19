import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";

const Header = () => {

const[btnName, setBtnName]=useState("Login");



  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact </li>
          <li>Cart</li>
          <button className="btn-login" onClick={()=>
            btnName==="Login"? setBtnName("Logout"):
            setBtnName("Login")}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
