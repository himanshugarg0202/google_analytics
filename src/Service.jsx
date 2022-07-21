import React from "react";
import Images from './Images';
import Card from './Card';
const Service = () =>{
    return(
        <>
        
         <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className='row'>
                <div className="col-10 mx-auto">
                <div className="row gy-4">   
                {
                    Images.map((val,ind)=>
                    {
                        return <Card 
                        Key={ind} 
                        imgsrc={val.imgsrc} 
                        title={val.title} 
                        text={val.text}
                        link={val.link}  
                        target={val.target}  
                        />
                                  
                    }
                    )  
                }
                
                    
                </div>
                </div>
            </div>   
        </div> 

        </>
         )
    
}
export default Service;