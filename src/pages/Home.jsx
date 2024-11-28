import React from "react";
import Main from "../components/Main/Main";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Partners from "../components/Partners/Partners";
import Contacts from "../components/Contacts/Contacts";


function Home(){
    return(
       <div className="home">
        <Main />
        <AboutSection />
        <ServicesSection />
        <Partners />
        <Contacts />
        
        

       </div>
    );
}
export default Home;