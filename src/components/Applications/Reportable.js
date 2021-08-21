import React from "react";
import '../../index.css';
import image from "../../images/reportable.png"

function Reportable() {
  return (
    <section>
        <div className="max-w-l rounded overflow-hidden shadow-lg bg-gray-400">
            <a href="https://reportable.netlify.app/#/" target="_blank">
                <img className="h-56 mt-2 w-full object-scale-down lazy" src={image} alt="home page of rePORTable app"></img>
            </a>
            <div className="h-56 px-2 py-2 align-items-center">
                <p className="text-center">
                    <strong>rePORTable</strong><br></br>rePORTable v0.1 is a simple document creation application. It allows:
                </p>
                <ul className="list-disc">
                    <li>The creation of rich-text documents online and saved dynamically to a database</li>
                    <li>Collaboration with team members on linked documents</li>
                    <li>Creation of new reports with different linked team members/authors</li>
                </ul>
            </div>
        </div>
    </section>
)}

export default Reportable


