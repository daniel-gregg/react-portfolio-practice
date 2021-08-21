import React from "react";
import '../../index.css';
import image from "../../images/DG_uganda.jpg"

function AboutMeCard() {
  return (
    <section className="w-full">
      <div className="w-4/5 mx-auto grid grid-cols-3 gap-4 bg-gray-300 rounded">
        <div className="bg-gray-300 my-auto col-span-1">
          <img className="h-96 py-4 border-black w-full object-scale-down lazy" src={image} alt="people clipart"></img>
        </div>
        <div className="px-4 py-8 align-items-center col-span-2">
          <p className="text-center">
            <strong>Experience:</strong><br></br> I have over 14 years of experience as a specialist in microeconomic analysis of resource-sector issues, policy evaluation, applied econometric analysis, and experimental methods for economic evaluation (behavioural economics). Working across research and consulting organisations in Australia and Internationally I have led multiple projects involving large teams of technical and non-technical people and with objectives that range across policy evaluation/advice, analysis of economic theory in real-world situations, and the development and implementation of interventions to support rural development/ environmental sustainability initiatives. 
          </p>
          <p className="text-center">
            <strong>Skills:</strong><br></br> I am regarded as an international expert on a range of applied data analysis methods and research methods including field experiments, policy evaluation, econometric analysis, and behavioural interventions with wide-ranging publications on these methods. In addition I am a qualified web-developer with a focus on javascript-based development platforms and NoSQL databases. Finally, I have substantial project management experience including in the development and operation of smallholder-inclusive supply chains as an ongoing commercial enterprise with a development focus. 
          </p>
          <p className="text-center">
            <strong>Focus & Interest:</strong><br></br> My core focus is to generate innovations in supply chains that support equity, inclusivity, and efficiency. I seek to apply economic theory to find market gaps that can be exploited for these outcomes through smart design of supply chain organisation principles, application of behavioural theory/interventions, and a commercialisation focus. 
          </p>
        </div>
      </div>
    </section>
  )}

export default AboutMeCard