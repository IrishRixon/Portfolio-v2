import { motion, type Transition } from "motion/react";

const transition: Transition = {
  type: "spring",
  duration: 1,
  delay: 0.3
}

function AboutMe() {
  return (
    <div
      className="flex flex-col h-full w-full rounded-2xl bg-(--card-bg) b
    ackdrop-blur-2xl border border-(--card-border)
     shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring) 
     p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <motion.h1 
      initial={{ opacity: 0, y: 10}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{...transition}}
      className="text-3xl sm:text-4xl font-medium text-center">Who I am</motion.h1>

      <article className="md:grow flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 md:h-full flex md:items-center justify-center">
          <motion.img
          initial={{ opacity: 0, x: -10}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{...transition}}
            className="w-full
              max-w-[280px]
              sm:max-w-[360px]
              md:max-w-[420px]
              lg:max-h-[550px]
              xl:max-h-[550px]
              object-cover
              rounded-xl"
            src="/images/photo2.webp"
            alt="photo"
          />
        </div>

        <div className="w-full lg:w-1/2 h-full flex md:items-center justify-center">
          <motion.p
          initial={{ opacity: 0, x: 10}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{...transition}}
            className="text-base
              sm:text-lg
              leading-relaxed
              text-justify"
          >
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
          </motion.p>
        </div>
      </article>
    </div>
  );
}

export default AboutMe;
