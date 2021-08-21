import React from "react";
import '../../index.css';
import image from "../../images/intersection.png"

function Economist() {
  return (
    <section className="w-full">
      <div className="w-4/5 mx-auto grid grid-cols-3 gap-4 bg-gray-300 rounded">
        <div className="bg-gray-300 my-auto col-span-1">
            <a href="https://intersectiontraders.com/" target="_blank" rel="noreferrer">
                <img className="h-96 py-4 border-black w-full object-scale-down lazy" src={image} alt="people clipart"></img>
            </a>
        </div>
        <div className="px-4 py-8 align-items-center col-span-2">
          <p className="text-center">
            <strong>Business</strong><br></br>Seeking impact drives my research agenda. As such I have sought to ensure research generates impact. Most recently this has been through the creation of a smallholder-inclusive coffee supply chain based in Uganda and with a cafe and coffee sales in Australia (see left). 
          </p>
          <p className="text-center">
            <strong>Consulting</strong><br></br>I consult on a range of topics - largely in the economic analysis of agriculture, food systems, environmental sustainability and rural development.  
          </p>
        </div>
      </div>
    </section>
)}

export default Economist


