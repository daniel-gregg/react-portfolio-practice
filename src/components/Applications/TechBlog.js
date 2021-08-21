import React from "react";
import '../../index.css';
import image from "../../images/tech blog.png"

function TechBlog() {
  return (
    <section>
        <div className="max-w-l rounded overflow-hidden shadow-lg bg-gray-400">
          <a href="https://tech-blog-mvc-practice.herokuapp.com/" target="_blank">
            <img className="h-56 mt-2 w-full object-scale-down lazy" src={image} alt="people clipart"></img>
          </a>
            <div className="h-56 px-2 py-2 align-items-center">
                <p className="text-center">
                    <strong>Bitcoin Bubbler</strong><br></br>Bitcoin Bubbler is a bitcoin price-tracker with dynamic updating. It allows:
                </p>
                <ul className="text-left">
                    <li>Viewing of up-to-date price ticker data for bitcoin</li>
                    <li>Calculation of the total value of bitcoin holdings</li>
                    <li>Conversion of bitcoin holdings value to other currencies</li>
                </ul>
            </div>
        </div>
    </section>
  )}

export default TechBlog