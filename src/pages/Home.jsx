import React from "react";
import Main from "../components/Main/Main";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

function Home(){
    return(
       <div className="home">
        <Main />
        <AboutSection />
        <ServicesSection />

       </div>
    );
}
export default Home;