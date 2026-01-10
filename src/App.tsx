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

function App() {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      setScrolled(el.scrollTop > 8);
    };

    scrollRef.current?.addEventListener("scroll", onScroll);

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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

        <main
          ref={scrollRef}
          className="absolute top-0 right-0 h-dvh w-full overflow-y-auto overflow-x-hidden"
        >
          <nav className="w-full h-16 sticky top-0 z-20">
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

            <section className="h-screen w-full mt-24">
              <Backend />
            </section>

            <section className="h-screen w-full mt-24">
              <MobileDev />
            </section>

            <section className="h-screen w-full mt-24">
              <Iot />
            </section>
          </article>
        </main>
      </div>
    </>
  );
}

export default App;
