import { transition } from "@/Motion/SkillMotion";
import { motion } from "motion/react";

function Contact() {
  return (
    <div className="w-full lg:flex-row flex-col h-full lg:pt-14 pb-8 flex gap-8">
      <motion.section
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
        className="w-full lg:w-1/2 lg:h-full"
      >
        <div className="p-6 lg:p-10 lg:min-w-full h-full rounded-2xl bg-(--card-bg) backdrop-blur-xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <h2 className="text-xl sm:text-2xl font-[roboto]! font-semibold">
            Send a Message
          </h2>

          <form
            className="mt-8 flex flex-col text-(--text-secondary) text-lg! font-[roboto]!"
            action="https://formspree.io/f/mykkyngv"
            method="post"
          >
            <label className="mb-2" htmlFor="">
              Your name
            </label>
            <input
              placeholder="Juan Dela Cruz"
              className="bg-(--card-border)/50 px-4 w-full h-12 border rounded-xl border-(--accent-primary)/20 focus:border-(--accent-primary)/50 outline-none text-(--text-primary)"
              name="name"
              type="text"
            />

            <label className="mt-4 mb-2" htmlFor="">
              Your email
            </label>
            <input
              placeholder="juan@example.com"
              className="px-4 w-full h-12 border rounded-xl border-(--accent-primary)/20 bg-(--card-border)/50 focus:border-(--accent-primary)/50 outline-none text-(--text-primary)"
              name="email"
              type="text"
            />

            <label className="mt-4 mb-2" htmlFor="">
              Your message
            </label>
            <textarea
              className="p-4 w-full h-48 resize-none border rounded-xl border-(--accent-primary)/20 bg-(--card-border)/50 text-(--text-primary) focus:border-(--accent-primary)/50 outline-none"
              name="message"
              placeholder="Tell me about your project or opportunity ... "
            ></textarea>

            <button
              type="submit"
              className="font-semibold hover:cursor-pointer border border-emerald-100 outline-none hover:scale-[102%] hover:border-(--accent-primary)! transition duration-300 flex justify-center items-center gap-2 p-4 text-(--text-primary) w-full rounded-2xl mt-4 bg-linear-to-r from-(--card-accent) to-(--accent-primary)/20"
            >
              <span className="material-icons-outlined -rotate-45 text-[18px]!">
                send
              </span>
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      <section className="w-full lg:w-1/2 h-full gap-8 lg:gap-4 flex flex-col">
        <motion.div
          className="flex flex-col p-5 w-full h-1/3 rounded-2xl bg-(--card-bg) backdrop-blur-xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        >
          <h2 className="text-xl sm:text-2xl font-[roboto]! font-semibold">
            Get in Touch
          </h2>

          <div className="mt-6 lg:grow flex flex-col gap-4 lg:gap-2 justify-center font-[roboto]!">
            <div className="flex lg:h-12 gap-4">
              <span className="material-icons-outlined p-2 bg-(--accent-primary)/10 rounded-xl text-(--accent-primary) flex content-center h-full w-12 text-center">
                email
              </span>
              <div className="flex flex-col text-sm!">
                <p className="font-[roboto]!">Email</p>
                <p className="text-(--text-primary)! text-base lg:text-lg font-[roboto]!">
                  irishrixon@gmail.com
                </p>
              </div>
            </div>
            <div className="flex h-12 gap-4">
              <span className="material-icons-outlined p-2 bg-(--accent-primary)/10 rounded-xl text-(--accent-primary) flex content-center h-full w-12 text-center">
                fmd_good
              </span>
              <div className="flex flex-col text-sm!">
                <p className="font-[roboto]!">Location</p>
                <p className="text-(--text-primary)! text-base lg:text-lg font-[roboto]!">
                  Candaba, Pampanga
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          className="flex flex-col p-5 w-full h-1/3 rounded-2xl bg-(--card-accent)/35 backdrop-blur-xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)"
        >
          <h2 className="text-xl sm:text-2xl font-[roboto]! font-semibold">
            Download Resume
          </h2>
          <p className="mt-4">
            Get detailed overview of my skills, experience, and education.
          </p>

          <a
            href="\resume\Resume.pdf"
            download
            type="button"
            className="mt-8 font-semibold hover:cursor-pointer border border-emerald-100 outline-none hover:scale-[102%] hover:border-(--accent-primary)! transition duration-300 flex justify-center items-center gap-2 p-4 text-(--text-primary) w-48 rounded-2xl bg-linear-to-r from-(--card-accent) to-(--accent-primary)/20"
          >
            <span className="material-icons-outlined text-[20px]!">
              file_download
            </span>
            Download CV
          </a>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 10}}
        whileInView={{ opacity: 1, x: 0}}
        transition={transition}
        className="flex flex-col p-5 w-full h-1/3 rounded-2xl bg-(--card-bg) backdrop-blur-xl border border-(--card-border) shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)">
          <h2 className="text-xl sm:text-2xl font-[roboto]! font-semibold">
            Connect with Me
          </h2>

          <div className="flex gap-4">
            <a
              href="https://github.com/IrishRixon"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="group hover:bg-[#83827E]/40 mt-8 font-semibold hover:cursor-pointer  outline-none hover:scale-[102%] hover:border-(--accent-primary)! transition duration-300 flex justify-center items-center gap-2 p-4 text-(--text-primary) w-48 rounded-2xl bg-[#83827E]/20"
            >
              <i
                className="pi pi-github text-(--text-secondary) group-hover:text-(--text-primary) transition duration-300"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>

            <a
              href="https://linkedin.com/in/irish-rixon-dela-peña-656aa1340"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="group hover:bg-[#83827E]/40 mt-8 font-semibold hover:cursor-pointer  outline-none hover:scale-[102%] hover:border-(--accent-primary)! transition duration-300 flex justify-center items-center gap-2 p-4 text-(--text-primary) w-48 rounded-2xl bg-[#83827E]/20"
            >
              <i
                className="pi pi-linkedin text-(--text-secondary) group-hover:text-blue-400 transition duration-300"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
