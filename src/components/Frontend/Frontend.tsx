
import Skill from "./Skill";
import SkillGroup from "./SkillGroup";

function Frontend() {
  return (
    <div
      className="h-full w-full
        flex flex-col
        lg:flex-row
        gap-8
        relative"
    >
      <section
        className="w-full
          lg:w-1/2
          flex
          lg:block
          justify-center
          lg:justify-start"
      >
        <h2
          className="text-2xl
            sm:text-3xl
            font-medium
            text-center
            lg:text-left
            sticky
            lg:top-24"
        >
          Frontend Development
        </h2>
      </section>

      <section
        className="w-full
          lg:w-1/2
          p-4
          sm:p-6
          md:p-8
          rounded-2xl
          bg-(--card-bg)
          border border-(--card-border)
          shadow-2xl/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          ring-1 ring-(--card-ring)
          flex flex-col
          gap-8"
      >
        <SkillGroup title="Frameworks & Core">
          <Skill icon="/logos/react.png" label="React" />
          <Skill icon="/logos/angular.png" label="Angular" />
          <Skill icon="/logos/typescript.png" label="TypeScript" />
          <Skill icon="/logos/js.png" label="JavaScript" />
        </SkillGroup>

        <SkillGroup title="Styling & Layout">
          <Skill icon="/logos/tailwind.png" label="Tailwind" />
          <Skill icon="/logos/bootstrap.png" label="Bootstrap" />
          <Skill icon="/logos/html.png" label="HTML" />
          <Skill icon="/logos/css.png" label="CSS" />
        </SkillGroup>

        <SkillGroup title="UI Component Libraries">
          <Skill icon="/logos/primeng.png" label="Prime NG" />
          <Skill icon="/logos/prime react.png" label="Prime React" />
          <Skill icon="/logos/shadcn.png" label="Shadcn" />
          <Skill icon="/logos/reactbits.png" label="React Bits" />
        </SkillGroup>
      </section>
    </div>
  );
}

export default Frontend;
