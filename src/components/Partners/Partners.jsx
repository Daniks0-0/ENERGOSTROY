import React from "react";
import "./Partners.scss";
import SamplePartners from "./SamplePartners";
import megastroyImage from "../../assets/megastroy.svg";
import energoArmImage from "../../assets/EnergoArm.svg";

const partnersArrs = [
    {
        key:1,
        img:megastroyImage,
    },
    { 
        key:2,
        img:energoArmImage,
    }
];

const Partners = () =>{
    return(
        <div className="Partners">
            <div>
            <h1>Наши партнёры</h1>
            <div className="list-partners"> 
                
                    {partnersArrs.map(partnersArr =>(
                        <SamplePartners 
                        key = {partnersArr.key}
                        img = {partnersArr.img} 
                        />

                    ))}
            </div>
            </div>      
        </div>
    );
}

export default Partners;