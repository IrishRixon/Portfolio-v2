import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import FloatingLines from "./components/FloatingLines";
import Navigation from "./components/Navigation/Navigation";
import { motion } from "motion/react";
import RotatingText from "./components/RotatingText";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="h-dvh w-dvw ">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={[3, 3, 3]}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={[5, 5, 5]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={false}
            parallax={true}
            animationSpeed={0.7}
          />

          <div className="absolute top-0 h-full w-full px-24 flex flex-col">
            <Navigation />
            <div className="grow">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* 
              <div className="flex gap-2 items-center">
                <h1 className="flex items-center text-6xl font-bold">From</h1>
                <RotatingText
                  texts={["coding", "components!", "thinking"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-6xl font-bold"
                  staggerFrom={"first"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 500 }}
                  rotationInterval={2000}
                />
              </div>
             */
}
