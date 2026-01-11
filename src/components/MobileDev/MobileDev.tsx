import React from "react";

function MobileDev() {
  return (
    <div className="h-full w-full flex">
      <section className="w-1/2 h-full">
        <h2 className="text-3xl text-center sticky top-18 mt-16">Mobile Development</h2>
      </section>

      <section className="w-1/2 h-full p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring) flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2>Platform</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\android.png"
                alt="android logo"
              />
              <p className="text-lg">Android</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Languages</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\kotlin.png"
                alt="kotlin logo"
              />
              <p className="text-lg">Kotlin</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>UI Framework</h2>

          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\jetpackcompose.png"
                alt="jetpack compose logo"
              />
              <p className="text-lg">Jetpack compose</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MobileDev;
