import React from "react";
import '../../index.css';
import YouTubeEmbed from "./YouTubeEmbed";

function Video() {
  return (
    <section id="hero">
        <div className="w-full px-20 mx-auto">
            <div className="pb-10 mt-8 relative rounded-lg bg-gray-300 container mx-auto flex flex-col items-center pt-4 sm:pt-4">    
                <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                    <p className="text-4xl text-center text-black font-bold leading-loose">
                        Some of my recent work on coffee supply chains
                    </p>
                </div>
                <div>
                    <YouTubeEmbed embedId="x8uf48Vx9_I"/>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Video;

