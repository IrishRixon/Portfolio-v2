import React from "react";
import RotatingText from "../RotatingText";

function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative justify-center md:justify-start">
      <section className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Hello, I'm Irish Rixon
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl mt-4 text-(--text-secondary)!">
          A Full Stack Web developer
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 items-center mt-6 sm:mt-8">
          <h1 className="flex items-center text-lg sm:text-xl font-bold italic">
            From
          </h1>
          <RotatingText
            texts={["idea to reality!", "concept to code", "vision to product"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-600 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-base sm:text-lg lg:text-xl font-bold italic text-[#061312]!"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 500 }}
            rotationInterval={3000}
          />
        </div>

        <p className="text-base sm:text-lg mt-4">
          I build web experiences that matter.
        </p>
      </section>

      <section className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="sm:h-[320px] lg:h-[450px] w-[245px] bg-[#ffffff0a] backdrop-blur-sm border border-(--card-border-color) rounded-2xl overflow-hidden shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-[#3fffd81a]">
          <img
            className="h-full object-cover"
            src="\images\photo.webp"
            alt="my photo"
          />
        </div>
      </section>

      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col justify-center items-center text-(--text-muted)! text-sm animate-bounce">
        <p>scroll down</p>
        <span className="material-icons-outlined">
          keyboard_double_arrow_down
        </span>
      </div>
    </div>
  );
}

export default Hero;
