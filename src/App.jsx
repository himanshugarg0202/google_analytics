import React,{useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// we import above javascript to use the dropdown list shown on output page in Dropdown lable.
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReactGA from "react-ga"

//import {Routes,Route,Navigate} from "react-router-dom";
import {Switch,Route,Redirect,withRouter} from "react-router-dom";


 const TRACKING_ID = "UA-235213508-2"
 ReactGA.initialize(TRACKING_ID)
const App = () =>{

     useEffect(()=>{
         ReactGA.pageview(window.location.pathname)
        console.log("pathvalue:",ReactGA.pageview(window.location.pathname))
           })
    return(
        <>
        <Navbar/> 
        <Switch>
        <Route exact path="/" component={Home}/>  
        <Route exact path="/about" component={About}/>  
        <Route exact path="/contact" component={Contact}/>  
        <Route exact path="/service" component={Service}/> 
           
        <Redirect to="/" />
        </Switch>
        <Footer/>
        </>
    )
}
export default withRouter(App);