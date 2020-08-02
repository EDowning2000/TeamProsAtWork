import React from "react";
import "./index.sass";
import logo from "../../images/logo.png";


export default function template (){
  return (
    <div className='container'>
      <img src={logo} className="mainLogo"></img>
        <div className='vision'>Vision</div>
        <div className='pros'>The Pro's</div>
        <div className='contact'>Contact</div>
        <div className='emer'>Made with 🖤 by Emerson D.</div>







    </div>
  )
}
