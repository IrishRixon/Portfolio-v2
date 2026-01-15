import { motion, MotionValue } from "motion/react";

interface Project {
  title: string;
  image: string;
  tech: string[];
  problem: string;
  process: string;
  outcome: string;
  link: string;
}

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

const projects: Project[] = [
  {
    title: "PawFile",
    image: "/images/pawfile.jpeg",
    tech: pawFileTechUsed,
    problem:
      "I wanted to explore how full-stack development, authentication, and Uploading media to internet while also building innovative digital pet identification solutions for pet owners using QR code.",
    process:
      "Firstly, users can log in and create account. Secondly, the users can add pets and generate QR code for each pet. Thirdly, users can upload images of their pets",
    outcome:
      "Built a fully functional digital pet identification system using QR codes.",
    link: "https://pawfile.netlify.app/",
  },
  {
    title: "QuizAI",
    image: "/images/quizai.jpeg",
    tech: quizAITechUsed,
    problem:
      "I wanted to explore how AI-powered games can enhance learning while also gaining hands-on experience with WebSockets for real-time multiplayer functionality.",
    process:
      "Users first select a category and difficulty, which the AI uses to generate quiz questions dynamically. For multiplayer mode, users can create or join rooms, enabling real-time competitive gameplay.",
    outcome: "Built a real-time multiplayer quiz game powered by AI.",
    link: "https://quizai-irishrixon.netlify.app/",
  },
  {
    title: "Portfolio v1",
    image: "/images/portfolioV1.jpeg",
    tech: portfolioV1,
    problem:
      "I wanted to showcase my skills and projects in a simple but visually appealing manner.",
    process: "Focused on simplicity, clarity, and easy navigation.",
    outcome: "Built a clean and functional personal portfolio website.",
    link: "https://irishrixonportfolio.netlify.app/",
  },
];

interface Props {
  horizontalScroll: MotionValue<number>;
  horizontalScrollRef: any;
}

function Project({ horizontalScroll, horizontalScrollRef }: Props) {
  return (
    <div className="sticky top-16 min-h-screen lg:min-h-0 lg:h-(--projects-height) w-full lg:mt-24 flex flex-col">
      <header className="flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-medium lg:text-center mt-4 text-center">
          Projects
        </h1>
        <p className="text-base sm:text-lg text-center mt-2">
          Every project is a story of problem-solving and learning. Here's I
          built and what it taught me.
        </p>
      </header>

      <motion.article
        style={{ x: horizontalScroll }}
        ref={horizontalScrollRef}
        className="lg:grow flex flex-col
          lg:flex-row mt-10 lg:mt-8 px-4 sm:px-8 lg:px-20
           pb-10 pt-5 gap-8 lg:gap-x-40"
      >
        {projects.map((project) => {
          return (
            <a
              href={project.link}
              target="_blank"
              className="text-start group transition-colors duration-300
         hover:cursor-pointer hover:border-(--accent-primary)
        flex flex-col lg:flex-row overflow-hidden lg:min-w-full lg:min-h-0 lg:h-auto rounded-2xl bg-(--card-bg)
         backdrop-blur-3xl border border-(--card-border) 
        shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring)"
            >
              <div className="w-full h-64 lg:w-1/2 lg:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <section className="w-full lg:w-1/2 p-5 sm:p-6 flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl">{project.title}</h2>

                <div className="lg:mt-8">
                  <p className="flex items-center gap-2 text-(--accent-primary)!">
                    <span className="material-icons-outlined text-[16px]!">
                      error
                    </span>
                    Problem
                  </p>
                  <p className="mt-2 ps-8 text-sm!">{project.problem}</p>
                </div>

                <div className="lg:mt-4">
                  <p className="flex items-center gap-2 text-(--accent-primary)!">
                    <span className="material-icons-outlined text-[18px]!">
                      psychology
                    </span>
                    Thoughts Process
                  </p>
                  <p className="mt-2 ps-8 text-sm!">{project.process}</p>
                </div>

                <div className="lg:mt-4">
                  <p className="flex items-center gap-2 text-(--accent-primary)!">
                    <span className="material-icons-outlined text-[16px]!">
                      build
                    </span>
                    Tech used
                  </p>

                  <div>
                    <ul className="mt-2 ps-8 list-none flex flex-wrap gap-2 text-(--accent-primary) text-sm!">
                      {project.tech.map((tech) => {
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
                </div>

                <div className="lg:mt-4">
                  <p className="flex items-center gap-2 text-(--accent-primary)!">
                    <span className="material-icons-outlined text-[18px]!">
                      radar
                    </span>
                    Outcome
                  </p>
                  <p className="mt-2 ps-8 text-sm!">{project.outcome}</p>
                </div>
              </section>
            </a>
          );
        })}
      </motion.article>
    </div>
  );
}

export default Project;
