import React from "react";
import '../../index.css';
import image from "../../images/bitcoin bubbler.png"

function BitcoinBubbler() {
  return (
    <section>
        <div className="max-w-l h-full rounded overflow-hidden shadow-lg bg-gray-400">
          <a href="https://github.com/daniel-gregg/Bitcoin-Bubbler" target="_blank">
            <img className="h-56 mt-2 w-full object-scale-down lazy" src={image} alt="people clipart"></img>
          </a>
            <div className="h-56 px-2 py-2 align-items-center">
                <p className="text-center">
                    <strong>Bitcoin Bubbler</strong><br></br>Bitcoin Bubbler is a bitcoin price-tracker with dynamic updating. It allows:
                </p><br></br>
                    <strong>-</strong> Viewing of up-to-date price ticker data for bitcoin<br></br>
                    <strong>-</strong> Calculation of the total value of bitcoin holdings<br></br>
                    <strong>-</strong> Conversion of bitcoin holdings value to other currencies<br></br>
            </div>
        </div>
    </section>
  )}

export default BitcoinBubbler