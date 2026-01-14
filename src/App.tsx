import { lazy, Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import FloatingLines from "./components/FloatingLines";
import Navigation from "./components/Navigation/Navigation";
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
const Project = lazy(() => import("./components/Project/Project"));
const Contact = lazy(() => import("./components/Contact/Contact"));
import Footer from "./components/Footer/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef<LenisRef>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useLenis((lenis) => {
    // called every scroll
    // console.log(lenis);
    setScrolled(lenis.animatedScroll > 90);
  });

  const scrollTo = (
    ref: React.RefObject<HTMLElement | null>,
    offset: number
  ) => {
    if (!ref.current) return;

    lenisRef.current?.lenis?.scrollTo(ref.current, {
      offset: offset,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  };

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
            <nav
              className={`w-full h-16 md:fixed top-0 z-20 ${
                scrolled ? "fixed" : "absolute"
              }`}
            >
              <Navigation
                onHome={() => scrollTo(heroRef, 0)}
                onAbout={() => scrollTo(aboutRef, -64)}
                onSkills={() => scrollTo(skillsRef, -64)}
                onProjects={() => scrollTo(projectsRef, 20)}
                onContact={() => scrollTo(projectsRef, -64)}
                addClass={
                  scrolled
                    ? "bg-[#070b1a]/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
                }
              />
            </nav>

            <article
              className="flex flex-col px-4 sm:px-6
              md:px-10
              lg:px-16
              xl:px-24 w-full z-10 absolute top-0"
            >
              <section ref={heroRef} className="min-h-screen w-full">
                <Hero />
              </section>

              <section ref={aboutRef} className="min-h-screen w-full mt-24">
                <Suspense fallback={<div>Loading ...</div>}>
                  <AboutMe />
                </Suspense>
              </section>

              <section
                ref={skillsRef}
                className="min-h-screen lg:h-screen w-full mt-16 sm:mt-24
                 flex flex-col"
              >
                <Suspense fallback={<div>Loading ...</div>}>
                  <div className="flex flex-col text-center">
                    <h1 className="text-3xl sm:text-4xl font-medium">
                      What I bring to the table
                    </h1>
                    <p className="text-base sm:text-lg mt-2">
                      Tools are important, but understanding them matters more.
                    </p>
                  </div>

                  <div className="grow flex mt-8">
                    <Frontend />
                  </div>
                </Suspense>
              </section>

              <section className="min-h-screen lg:h-screen w-full mt-8">
                <Suspense fallback={<div>Loading ...</div>}>
                  <Backend />
                </Suspense>
              </section>

              <section className="lg:h-screen w-full mt-8">
                <Suspense fallback={<div>Loading ...</div>}>
                  <MobileDev />
                </Suspense>
              </section>

              <section className="lg:h-screen w-full mt-8">
                <Suspense fallback={<div>Loading ...</div>}>
                  <Tools />
                </Suspense>
              </section>

              <section className="lg:h-screen w-full mt-8">
                <Suspense fallback={<div>Loading ...</div>}>
                  <Iot />
                </Suspense>
              </section>

              <section
                ref={projectsRef}
                className="lg:minus-nav-height w-full mt-8 lg:mt-24"
              >
                <Suspense fallback={<div>Loading ...</div>}>
                  <Project />
                </Suspense>
              </section>

              <section className="w-full mt-24 px-4">
                <div className="flex flex-col text-center">
                  <h1 className="text-3xl sm:text-4xl font-medium">
                    Let's Build Something Meaningful Together
                  </h1>
                  <p className="text-base sm:text-lg mt-2">
                    If you're looking for someone who's hungry to grow and
                    serious about building, let's talk.
                  </p>
                </div>

                <div className="lg:h-screen w-full flex mt-8">
                  <Contact />
                </div>
              </section>

              <section className="w-full">
                <Footer />
              </section>
            </article>
          </main>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
