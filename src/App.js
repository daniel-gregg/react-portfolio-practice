import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Economics from "./components/Economics";
import Video from "./components/Video";
import Applications from "./components/Applications";

function App() {
  return (
    <div className="container mx-auto py-10 px-4 bg-gray-200 bg-bg-pattern">
      <NavBar />
      <Hero />
      <About />
      <Applications />
      <Economics />
      <Video />
    </div>
  );
}

export default App;
