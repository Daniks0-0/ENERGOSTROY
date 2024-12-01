import React from "react";
import Main from "../components/Main/Main";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Partners from "../components/Partners/Partners";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";


function Home(){
    return(
       <div className="home">
        <Main />
        <AboutSection />
        <ServicesSection />
        <Partners />
        <Contacts />
        <Footer />
       </div>
    );
}
export default Home;