import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-around">
        <div>
          <h5 className="font-medium text-xl">CYLEN</h5>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>Home</li>
            <li>Offers</li>
            <li>Products</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-3">
            <ul className="flex gap-3 ">
              <li>Search</li>

              <li>cart</li>
            </ul>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="section-one">
        <div className="section-one-heading">
          <div>
            <h1>CYCLE</h1>
          </div>
          <h1>HELMETS</h1>
        </div>
        <div className="section-one-container">
          <div className="section-one-container-left">
            <div>
              <p className="text-start">
                A MOUNTAIN BIKE HELMETS COVERS MORE OF BLACK OF THE HEAD
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              {/** IMAGE HERE */}
              <img src="/public/helmet-2.png" alt="helmet" width={100} />
              <div className="flex flex-wrap relative">
                <h5 className="chip">MOUNTAIN</h5>
                <h5 className="chip absolute left-[89px] top-[24px]">
                  CYCLING
                </h5>
                <h5 className="chip absolute left-0 top-[58px]">
                  CYLCE HELMET
                </h5>
              </div>
            </div>
          </div>
          <div className="section-one-container-middle">
            {/** CYCLE IMAGE */}
            <img src="/public/cycle1.png" alt="cycle" />
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col text-start gap-3">
              <h2>SINCE IT'S MORE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti totam placeat quaerat commodi hic esse dolore
                architecto ratione error aperiam!
              </p>
              <button className="w-[10rem] border rounded-full bg-black text-white pt-3 pb-3 pl-7 pr-7 ">
                EXPLORE ALL
              </button>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="border-b border-black w-16"></div>
                <h2>PROTECTION</h2>
              </div>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
