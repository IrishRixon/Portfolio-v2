import SkillGroup from "../Frontend/SkillGroup";
import Skill from "../Frontend/Skill";
import { motion } from "motion/react";
import { transition } from "@/Motion/SkillMotion";

function Backend() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-8">
      <section
        className="w-full lg:w-1/2 h-full flex
          lg:block justify-center lg:justify-start"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-2xl sm:text-3xl lg:text-left lg:sticky text-center sticky lg:top-18 lg:mt-16"
        >
          Backend Development
        </motion.h2>
      </section>

      <section className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl ring-1 ring-(--card-ring) flex flex-col gap-8">
        <SkillGroup title="Languages & Runtime">
          <Skill icon="/logos/nodejs.png" label="Node.js" />
          <Skill icon="/logos/php.png" label="PHP" />
        </SkillGroup>

        <SkillGroup title="Frameworks & Libraries">
          <Skill icon="/logos/express.png" label="Express" />
          <Skill icon="/logos/socket.png" label="Socket.io" />
        </SkillGroup>

        <SkillGroup title="Databases">
          <Skill icon="/logos/mongodb.png" label="MongoDB" />
          <Skill icon="/logos/sqlite.png" label="SQLite3" />
          <Skill icon="/logos/mysql.png" label="MySQL" />
        </SkillGroup>

        <SkillGroup title="Communication Concepts">
          <Skill icon="/logos/websocket.png" label="WebSockets" />
          <Skill icon="/logos/rest.png" label="REST API" />
        </SkillGroup>

        <SkillGroup title="Authentication & Security">
          <Skill icon="/logos/jwt.png" label="JWT Authentication" />
          <Skill icon="/logos/bcrypt.png" label="Bcrypt Hashing" />
        </SkillGroup>
      </section>
    </div>
  );
}

export default Backend;
