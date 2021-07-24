import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  
  return (
    <div>  
     <div className="homebody">
        <section className="lan-sec">
       
          {/* circular nav bar */}
          <nav className="land-menu">
            <ul>           
              <li>
                <Link  to="/adminlogin"  className="navlnk">Admin</Link>
              </li>
              <li>
                <Link  to="/managerlogin"  className="navlnk">Manager</Link>
              </li>
              <li>
                <Link  to="/checkerlogin" className="navlnk">Checker</Link>
              </li>
              <li>
                <Link  to="/vendorlogin"  className="navlnk">Vendor</Link>
              </li>             
            </ul>
               </nav>

          <div class="bannerText">
            <h2>INVENTORY MANAGEMENT </h2>
            <br />
            <h3>E-MART GROCERY SHOP</h3>
            <p>
              Real-time Inventory Visibilty Enjoy real-time detailed visibilty
              into key inventory control and supply chain management measures,
              Including inventory trends, stock on orderand supplier on-time
              performce.
            </p>
           
          </div>
        </section>

        {/* <img src="images/bg2.png" class="myimg" width="460" height="345"/>  */}
        </div>
    </div>
    
  );
};

