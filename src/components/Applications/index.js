import React from "react";
import '../../index.css';
import Reportable from './Reportable';
import BitcoinBubbler from "./BitcoinBubbler";
import TechBlog from "./TechBlog"


function Applications() {
  return (
    <section id="applications" className="container">
        <div className="flex justify-center">
            <p className="mt-10 mb-4 max-w-4xl text-3xl font-bold text-gray-900 lg:mx-auto">
                Some of my applications
            </p>
        </div>

        <div className="flex justify-center">
            <div className="w-full px-32 mx-auto grid grid-cols-3 gap-2">
                <Reportable />
                <BitcoinBubbler />
                <TechBlog />
            </div>    
        </div>
    </section>
)}

export default Applications