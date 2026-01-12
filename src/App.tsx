import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import FloatingLines from "./components/FloatingLines";
import Navigation from "./components/Navigation/Navigation";
import { motion } from "motion/react";
import RotatingText from "./components/RotatingText";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Frontend from "./components/Frontend/Frontend";
import Backend from "./components/Backend/Backend";
import MobileDev from "./components/MobileDev/MobileDev";
import Iot from "./components/Iot/Iot";
import Tools from "./components/Tools/Tools";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef<LenisRef>(null);

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
    setScrolled(lenis.animatedScroll > 90);
  });

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <div className="h-dvh w-full ">
          <div className="min-w-full h-dvh fixed">
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
          </div>

          <main className="absolute top-0 right-0 h-dvh w-full">
            <nav className="w-full h-16 fixed top-0 z-20">
              <Navigation
                addClass={
                  scrolled
                    ? "bg-[#070b1a]/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
                }
              />
            </nav>

            <article className="flex flex-col px-24 w-full z-10 absolute top-0">
              <section className="min-h-screen w-full">
                <Hero />
              </section>

              <section className="h-screen w-full mt-24">
                <AboutMe />
              </section>

              <section className="h-screen w-full mt-24 flex flex-col">
                <div className="flex flex-col">
                  <h1 className="text-4xl font-medium text-center">
                    What I bring to the table
                  </h1>
                  <p className="text-lg text-center mt-2">
                    Tools are important, but understanding them matters more.
                  </p>
                </div>

                <div className="grow flex mt-8">
                  <Frontend />
                </div>
              </section>

              <section className="h-screen w-full mt-8">
                <Backend />
              </section>

              <section className="h-screen w-full mt-8">
                <MobileDev />
              </section>

              <section className="h-screen w-full mt-8">
                <Tools />
              </section>

              <section className="h-screen w-full mt-8">
                <Iot />
              </section>

              <section className="minus-nav-height w-full mt-24">
                <Project />
              </section>

              <section className="w-full mt-24">
                <div className="flex flex-col">
                  <h1 className="text-4xl font-medium text-center">
                    Let's Build Something Meaningful Together
                  </h1>
                  <p className="text-lg text-center mt-2">
                    If you're looking for someone who's hungry to grow and
                    serious about building, let's talk.
                  </p>
                </div>

                <div className="h-screen w-full flex mt-8">
                  <Contact />
                </div>
              </section>
            </article>
          </main>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
