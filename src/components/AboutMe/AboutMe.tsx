import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-col h-full w-full p-8 rounded-2xl bg-(--card-bg) backdrop-blur-2xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
      <h1 className="text-4xl font-medium text-center">Who I am</h1>

      <article className="grow flex">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img className="h-[550px]" src="/images/photo2.webp" alt="photo" />
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <p className="text-lg">
            I’m Irish Rixon Dela Peña, a full stack web developer who enjoys
            turning ideas into clean, functional, and user-friendly web
            experiences. I’m naturally curious and enjoy learning, which has led
            me to gain experience in building Android mobile applications and
            working with Internet of Things (IoT) projects. <br />
            <br /> My main focus is building responsive and scalable web
            applications using React, Angular, Node.js, and modern UI libraries,
            with attention to performance and usability. I value clean and
            maintainable code, thoughtful UI interactions, and building
            effective, real-world projects. <br />
            <br />
            I’m currently seeking opportunities where I can grow as a developer
            and contribute to meaningful products that make a real impact.
          </p>
        </div>
      </article>
    </div>
  );
}

export default AboutMe;
