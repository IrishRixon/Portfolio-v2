import React from "react";

function Frontend() {
  return (
    <div className="h-full w-full flex relative">
      <section className="w-1/2 h-full">
        <h2 className="text-3xl text-center sticky top-18 mt-16">
          Frontend Development
        </h2>
      </section>

      <section className="w-1/2 h-full p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring) flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2>Frameworks & Core</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\react.png"
                alt="react logo"
              />
              <p className="text-lg">React</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-cover"
                src="\logos\angular.png"
                alt="angular logo"
              />
              <p className="text-lg">Angular</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-cover"
                src="\logos\typescript.png"
                alt="typescript logo"
              />
              <p className="text-lg">Typescript</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-cover"
                src="\logos\js.png"
                alt="javascript logo"
              />
              <p className="text-lg">Javascript</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Styling & Layout</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\tailwind.png"
                alt="tailwind logo"
              />
              <p className="text-lg">Tailwind</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\bootstrap.png"
                alt="bootstrap logo"
              />
              <p className="text-lg">Bootstrap</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\html.png"
                alt="html logo"
              />
              <p className="text-lg">HTML</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\css.png"
                alt="css logo"
              />
              <p className="text-lg">CSS</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>UI Component libraries</h2>

          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\primeng.png"
                alt="primeng logo"
              />
              <p className="text-lg">Prime NG</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\prime react.png"
                alt="primeng logo"
              />
              <p className="text-lg">Prime React</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain rounded"
                src="\logos\shadcn.png"
                alt="shadcn logo"
              />
              <p className="text-lg">Shadcn</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain rounded"
                src="\logos\reactbits.png"
                alt="react bits logo"
              />
              <p className="text-lg">React bits</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Frontend;
