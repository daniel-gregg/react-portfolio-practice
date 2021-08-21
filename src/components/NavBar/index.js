import React from "react";
import '../../index.css';

function Navigation() {
    return (
      <div className="relative rounded-lg bg-gray-300 mx-20">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <img className="h-16 w-auto sm:h-16" src="./spaniel-boone.png" alt=""></img>
              </a>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <a href="#about" className="text-base text-gray-500 hover:text-gray-900 smooth-scroll">
                About Me
              </a>
              <a href="#applications" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Portfolio
              </a>
              <a href="#work" className="text-base text-gray-500 hover:text-gray-900 smooth-scroll">
                Work
              </a>
              <a href="./Gregg CV wd.pdf" target="_blank" className="text-base font-medium text-gray-500 hover:text-gray-900">
                CV
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="/" className="p-1.5">
                <img className="sm: h-5 w-auto md: h- w-auto lg: h-10 w-auto" src="./githublogo.png" alt=""></img>
              </a>
              <a href="/" className="p-1.5">
                <img className="h-10 w-auto" src="./linkedinlogo.png" alt=""></img>
              </a>
              <a href="/" className="p-1.5">
                <img className="h-10 w-auto" src="./researchgatelogo.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Navigation




