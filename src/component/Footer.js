import React from "react";

export default function Footer() {
 return <nav className="footer"><ul>
  <li><img src={require("../twitter.png")} alt="icon" className="smallicon" /></li>
  <li><img src={require("../facebook.png")} alt="icon" className="smallicon" /></li>
  <li><img src={require("../insta.png")} alt="icon" className="smallicon" /></li>
  <li><img src={require("../linkedin.png")} alt="icon" className="smallicon" /></li>
  <li><img src={require("../github.png")} alt="icon" className="smallicon" /></li>
 </ul></nav>
}