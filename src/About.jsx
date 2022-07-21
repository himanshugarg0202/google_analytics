import React from "react";
import web from "../src/Images/2.jpg";
import Common from './Common';
const About = () =>{
    return(
        <>
        <Common
         name="Welcome to about Page"
          imgsrc={web} 
          visit="/contact"
          btname="Contact Now"
          />
        </>
    )
}
export default About;