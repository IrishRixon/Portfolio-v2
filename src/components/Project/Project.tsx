import ReactLenis, { LenisContext } from "lenis/react";
import React, { useContext } from "react";

const quizAITechUsed: string[] = [
  "React",
  "Express.js",
  "Socket.io",
  "OpenAI API",
  "TypeScript",
  "Tailwind CSS",
  "Prime React",
];

const pawFileTechUsed: string[] = [
  "Angular",
  "Express.js",
  "Typescript",
  "Javascript",
  "MongoDB",
  "PrimeNG",
];

const portfolioV1: string[] = ["Angular", "Prime NG"];

function Project() {
  //   const lenis = useContext(LenisContext);

  return (
    <div className="h-full w-full mt-24 flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-4xl font-medium text-center mt-4">Projects</h1>
        <p className="text-lg text-center mt-2">
          Every project is a story of problem-solving and learning. Here's I
          built and what it taught me.
        </p>
      </div>

      <article className="grow flex mt-8 px-20 pb-10 pt-5 gap-x-40 overflow-x-auto">
        <button className="text-start group transition-colors duration-300 hover:cursor-pointer hover:border-(--accent-primary) flex overflow-hidden min-w-full h-full rounded-2xl bg-(--card-bg) backdrop-blur-3xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <div className="w-1/2 h-full overflow-hidden">
            <img
              className="w-full h-full duration-300 object-cover group-hover:scale-125 transition"
              src="\images\pawfile.jpeg"
              alt="quizai"
            />
          </div>

          <section className="w-1/2 p-6">
            <h2 className="text-2xl">PawFile</h2>

            <div className="mt-8">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[16px]!">error</span>
                Problem
              </p>
              <p className="mt-2 ps-8 text-sm!">
                I wanted to explore how full-stack development, authentication,
                and Uploading media to internet while also building innovative
                digital pet identification solutions for pet owners using QR
                code.
              </p>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[18px]!">psychology</span>
                Thoughts Process
              </p>
              <p className="mt-2 ps-8 text-sm!">
                Firstly, users can log in and create account. Secondly, the
                users can add pets and generate QR code for each pet. Thirdly,
                users can upload images of their pets
              </p>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[16px]!">build</span>
                Tech used
              </p>

              <div>
                <ul className="mt-2 ps-8 list-none flex flex-wrap gap-2 text-(--accent-primary) text-sm!">
                  {pawFileTechUsed.map((tech) => {
                    return (
                      <li
                        key="text"
                        className="bg-(--accent-primary)/10 py-1 px-4 rounded-4xl border border-(--card-border)"
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-4">
                <p className="flex items-center gap-2 text-(--accent-primary)!">
                  <span className="material-icons text-[18px]!">radar</span>
                  Outcome
                </p>
                <p className="mt-2 ps-8 text-sm!">
                  Built a fully functional digital pet identification using QR
                  code.
                </p>
              </div>
            </div>
          </section>
        </button>

        <button className="text-start group transition-colors duration-300 hover:cursor-pointer hover:border-(--accent-primary) flex overflow-hidden min-w-full h-full rounded-2xl bg-(--card-bg) backdrop-blur-3xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <div className="w-1/2 h-full overflow-hidden">
            <img
              className="w-full h-full duration-300 object-cover group-hover:scale-125 transition"
              src="\images\quizai.jpeg"
              alt="quizai"
            />
          </div>

          <section className="w-1/2 p-6">
            <h2 className="text-2xl">QuizAI</h2>

            <div className="mt-8">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[16px]!">error</span>
                Problem
              </p>
              <p className="mt-2 ps-8 text-sm!">
                I wanted to explore how AI-powered games can enhance learning
                while also gaining hands-on experience with WebSockets for
                real-time multiplayer functionality.
              </p>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[18px]!">psychology</span>
                Thoughts Process
              </p>
              <p className="mt-2 ps-8 text-sm!">
                Users first select a category and difficulty, which the AI uses
                to generate quiz questions dynamically. For multiplayer mode,
                users can create or join rooms, enabling real-time competitive
                gameplay.
              </p>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[16px]!">build</span>
                Tech used
              </p>

              <div>
                <ul className="mt-2 ps-8 list-none flex flex-wrap gap-2 text-(--accent-primary) text-sm!">
                  {quizAITechUsed.map((tech) => {
                    return (
                      <li
                        key="text"
                        className="bg-(--accent-primary)/10 py-1 px-4 rounded-4xl border border-(--card-border)"
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-4">
                <p className="flex items-center gap-2 text-(--accent-primary)!">
                  <span className="material-icons text-[18px]!">radar</span>
                  Outcome
                </p>
                <p className="mt-2 ps-8 text-sm!">
                  Built a fully functional multiplayer quiz game that uses AI to
                  generate questions.
                </p>
              </div>
            </div>
          </section>
        </button>

        <button className="text-start group transition-colors duration-300 hover:cursor-pointer hover:border-(--accent-primary) flex overflow-hidden min-w-full h-full rounded-2xl bg-(--card-bg) backdrop-blur-3xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <div className="w-1/2 h-full overflow-hidden">
            <img
              className="w-full h-full duration-300 object-cover group-hover:scale-125 transition"
              src="\images\portfolioV1.jpeg"
              alt="quizai"
            />
          </div>

          <section className="w-1/2 p-6">
            <h2 className="text-2xl">Portfolio v.1</h2>

            <div className="mt-8">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[16px]!">error</span>
                Problem
              </p>
              <p className="mt-2 ps-8 text-sm!">
                I wanted to showcase my skills and projects in a simple but
                visually appealing manner.
              </p>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[18px]!">psychology</span>
                Thoughts Process
              </p>
              <p className="mt-2 ps-8 text-sm!">
                Focused on simplicity, clarity, and easy navigation that shows
                Who I am, What I do, and How to reach me.
              </p>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 text-(--accent-primary)!">
                <span className="material-icons text-[16px]!">build</span>
                Tech used
              </p>

              <div>
                <ul className="mt-2 ps-8 list-none flex flex-wrap gap-2 text-(--accent-primary) text-sm!">
                  {portfolioV1.map((tech) => {
                    return (
                      <li
                        key="text"
                        className="bg-(--accent-primary)/10 py-1 px-4 rounded-4xl border border-(--card-border)"
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-4">
                <p className="flex items-center gap-2 text-(--accent-primary)!">
                  <span className="material-icons text-[18px]!">radar</span>
                  Outcome
                </p>
                <p className="mt-2 ps-8 text-sm!">
                  Built a fully functional multiplayer quiz game that uses AI to
                  generate questions.
                </p>
              </div>
            </div>
          </section>
        </button>
      </article>
    </div>
  );
}

export default Project;
