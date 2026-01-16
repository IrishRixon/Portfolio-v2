import { transition } from "@/Motion/SkillMotion";
import { motion } from "motion/react";

function SkillGroup({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <motion.div
      initial={{ opacity: 0, y: 10}}
        whileInView={{ opacity: 1, y: 0}}
        transition={transition}
      className="flex flex-col gap-3 ">
        <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
        <ul className="flex flex-wrap gap-3 sm:gap-4">
          {children}
        </ul>
      </motion.div>
    );
  }

export default SkillGroup;