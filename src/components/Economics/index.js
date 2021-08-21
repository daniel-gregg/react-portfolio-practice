import React from "react";
import '../../index.css';
import Economist from './Economist';


function Work() {
  return (
    <section id="work" className="container w-full ">
        <div className="flex justify-center">
            <p className="mt-10 mb-4 max-w-4xl text-3xl font-bold text-gray-900 lg:mx-auto">
                Other things
            </p>
        </div>

        <div className="flex justify-center">
            <div className="w-full px-32 mx-auto">
                <Economist />
            </div>    
        </div>
    </section>
)}

export default Work