import React from "react";
import {NavLink} from "react-router-dom";
// we directly copy the navbar code from "https://getbootstrap.com/docs/4.5/components/navbar/" due to bootstrap.
// we must use className insted of class because class is reserve keywrod.
const Navbar=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">

                
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">Software Firm</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="menu_active "
        exact 
        className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active " className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active " className="nav-link" to="/service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active " className="nav-link" to="/contact">Contact</NavLink>
      </li>
     
      
    </ul>
    
  </div>
</nav>
</div>

            </div>

        </div>
        </>
    )
}

export default Navbar;
