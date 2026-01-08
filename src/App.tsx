import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import FloatingLines from "./components/FloatingLines";

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

          <div className="absolute top-0 h-full w-full">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
