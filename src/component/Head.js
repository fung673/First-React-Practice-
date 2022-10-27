import React from "react";

export default function Head() {
 return <nav className="head"><img src={require("../dog.jpg")} alt="icon" className="icon" /><div className="bigname">Alex Fung</div>
  <div className="title">Web Developer</div>
  <div className="link">https://github.com/fung673</div>
  <div className="mailbox">
   <img src={require("../email.png")} alt="email" className="email" />Email</div>
 </nav>
}