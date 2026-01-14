interface Project {
  title: string;
  image: string;
  tech: string[];
  problem: string;
  process: string;
  outcome: string;
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
      "I wanted to explore full-stack development, authentication, and media uploads while building a digital pet identification system using QR codes.",
    process:
      "Users can register, add pets, generate QR codes, and upload pet images.",
    outcome:
      "Built a fully functional digital pet identification system using QR codes.",
  },
  {
    title: "QuizAI",
    image: "/images/quizai.jpeg",
    tech: quizAITechUsed,
    problem:
      "I wanted to explore AI-powered games while learning real-time multiplayer using WebSockets.",
    process:
      "AI dynamically generates questions based on category and difficulty, with real-time multiplayer rooms.",
    outcome: "Built a real-time multiplayer quiz game powered by AI.",
  },
  {
    title: "Portfolio v1",
    image: "/images/portfolioV1.jpeg",
    tech: portfolioV1,
    problem:
      "I wanted a simple but visually appealing way to showcase my skills and projects.",
    process: "Focused on simplicity, clarity, and easy navigation.",
    outcome: "Built a clean and functional personal portfolio website.",
  },
];

function Project() {
  return (
    <div className="min-h-screen lg:min-h-0 lg:h-full w-full lg:mt-24 flex flex-col">
      <header className="flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-medium lg:text-center mt-4 text-center">
          Projects
        </h1>
        <p className="text-base sm:text-lg text-center mt-2">
          Every project is a story of problem-solving and learning. Here's I
          built and what it taught me.
        </p>
      </header>

      <article
        className="lg:grow flex flex-col
          lg:flex-row mt-10 lg:mt-8 px-4 sm:px-8 lg:px-20
           pb-10 pt-5 gap-8 lg:gap-x-40 lg:overflow-x-auto
           lg:snap-x lg:snap-mandatory"
      >
        {projects.map((project) => {
          return (
            <button
              className="text-start group transition-colors duration-300
         hover:cursor-pointer hover:border-(--accent-primary)
        flex flex-col lg:flex-row overflow-hidden lg:min-w-full lg:min-h-0 lg:h-auto rounded-2xl bg-(--card-bg)
         backdrop-blur-3xl border border-(--card-border) 
        shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-(--card-ring) lg:snap-center"
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
            </button>
          );
        })}
      </article>
    </div>
  );
}

export default Project;
