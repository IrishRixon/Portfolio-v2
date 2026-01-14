
import Skill from "../Frontend/Skill";
import SkillGroup from "../Frontend/SkillGroup";

function Tools() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-8">
      <section className="w-full lg:w-1/2 h-full flex
          lg:block justify-center lg:justify-start">
        <h2 className="text-2xl sm:text-3xl lg:text-left lg:sticky text-center sticky lg:top-18 lg:mt-16">Tools & Platforms</h2>
      </section>

      <section className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl ring-1 ring-(--card-ring) flex flex-col gap-8">
      <SkillGroup title="Development">
          <Skill icon="/logos/git.webp" label="Git" />
          <Skill icon="/logos/postman.png" label="Postman" />
        </SkillGroup>

        <SkillGroup title="Design">
          <Skill icon="/logos/figma.png" label="Figma" />
        </SkillGroup>

        <SkillGroup title="Cloud & Media">
          <Skill icon="/logos/cloudinary.webp" label="Cloudinary" />
          <Skill icon="/logos/firebase.png" label="Firebase" />
        </SkillGroup>

        <SkillGroup title="Deployment">
          <Skill icon="/logos/netlify.png" label="Netlify" />
          <Skill icon="/logos/render.png" label="Render" />
        </SkillGroup>
      </section>
    </div>
  );
}

export default Tools;
