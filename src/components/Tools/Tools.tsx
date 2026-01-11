import React from "react";

function Tools() {
  return (
    <div className="h-full w-full flex">
      <section className="w-1/2 h-full">
        <h2 className="text-3xl text-center sticky top-18 mt-16">Tools & Platforms</h2>
      </section>

      <section className="w-1/2 h-full p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring) flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2>Development</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\git.webp"
                alt="git logo"
              />
              <p className="text-lg">Git</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\postman.png"
                alt="postman logo"
              />
              <p className="text-lg">Postman</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Design</h2>
          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\figma.png"
                alt="figma logo"
              />
              <p className="text-lg">Figma</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Cloud & Media</h2>

          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\cloudinary.webp"
                alt="cloudinary logo"
              />
              <p className="text-lg">Cloudinary</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\firebase.png"
                alt="firebase logo"
              />
              <p className="text-lg">Firebase</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Deployment</h2>

          <ul className="flex flex-wrap w-full gap-4 text-(--text-primary)">
            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\netlify.png"
                alt="netlify logo"
              />
              <p className="text-lg">Netlify</p>
            </li>

            <li className="flex items-center p-2.5 rounded-xl gap-2.5 px-5 shadow-2xl backdrop-blur-2xl">
              <img
                className="h-[40px] w-[40px] object-contain"
                src="\logos\render.png"
                alt="render logo"
              />
              <p className="text-lg">Render</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Tools;
