import React from "react";
import '../../index.css';
import AboutMeCard from "./AboutMeCard"

function About() {
  return (
    <section id="about" className="container w-full">
        <div className="flex justify-center">
            <p className="mt-10 mb-4 max-w-4xl text-3xl font-bold text-gray-800 lg:mx-auto">
                About me
            </p>
        </div>

        <div className="flex justify-center w-full">
            <AboutMeCard />  
        </div>
    </section>
)}

export default About