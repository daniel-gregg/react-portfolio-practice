import React from "react";
import '../../index.css';
import Typical from "react-typical";

function Hero() {
  return (
    <section id="hero">
        <div className="w-full px-20 mx-auto">
            <div className="max-h-48 mt-8 relative rounded-lg bg-gray-300 container mx-auto flex flex-col items-center pt-4 sm:pt-4">    
                <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold leading-loose">
                        Hi, I'm Daniel
                    </h1>
                    <h1>    
                        <Typical
                            className="pt-10 text-3xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center text-grey font-bold leading-loose"
                            loop={Infinity}
                            steps={[
                            "Economist",
                            2000,
                            "Data Analyst",
                            2000,
                            "Web-Developer",
                            2000,
                            "Behavioural Scientist",
                            2000,
                            ]}
                        />
                    </h1>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;

