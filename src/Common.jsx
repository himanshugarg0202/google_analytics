import React from "react";
import { NavLink } from "react-router-dom";
import useGAEventTracker from "./hook/useGAEventTracker";

const Common = (Props) =>{

    const GAEventsTracker = useGAEventTracker("Web Link")
    return(
        <>
        <section id ="header" className="d-flex align-items-center">
        <div className="container-fluid ">
            <div className='row'>
                <div className="col-10 mx-auto">
                <div className='row'>
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                    <h1>{Props.name } <strong className="brand-name">DT Digital Labs Pvt. Ltd.</strong></h1>
                    <h2 className="my-3"> We are the team of talented developers.</h2>
                        <div className="mt-3">
                            <NavLink 
                            to={Props.visit} 
                            className="btn-get-started"
                            onClick={()=>GAEventsTracker(`${Props.visit}`)}
                            >{Props.btname}</NavLink>

                        </div>
                   </div>
                   
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={Props.imgsrc} className="img-fluid animated" alt="Common img"/>
                </div>
                </div>
                </div>
            </div>   
        </div>
        </section>
        </>
    )
}
export default Common;