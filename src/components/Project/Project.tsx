import ReactLenis, { LenisContext } from "lenis/react";
import React, { useContext } from "react";

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

      <article className="grow flex mt-8 px-20 pb-10 pt-5 gap-x-40 overflow-x-clip">
        <div className="overflow-hidden min-w-full h-full rounded-2xl bg-(--card-bg) backdrop-blur-2xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <img
            className="w-1/2 h-full object-cover"
            src="\images\quizai.jpeg"
            alt="quizai"
          />
        </div>

        <div className="overflow-hidden min-w-full h-full rounded-2xl bg-(--card-bg) backdrop-blur-2xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <img
            className="w-1/2 h-full object-cover"
            src="\images\quizai.jpeg"
            alt="quizai"
          />
        </div>
      </article>
    </div>
  );
}

export default Project;
