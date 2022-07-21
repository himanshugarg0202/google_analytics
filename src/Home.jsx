import React,{useEffect} from "react";
import web from "../src/Images/1.jpg";
import Common from './Common';
//import ReactGA from "react-ga"
const Home = () =>{
   useEffect(()=>{
 console.log("home Page")  },[])
    return(
        <>
        <Common 
          name="Grow your business with"
          imgsrc={web} 
          visit="/service" 
          btname="Get Started"
          />
        </>
    )
}
export default Home;