
import SkillGroup from "../Frontend/SkillGroup";
import Skill from "../Frontend/Skill";

function MobileDev() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-8">
      <section className="w-full lg:w-1/2 h-full flex
          lg:block justify-center lg:justify-start">
        <h2 className="text-2xl sm:text-3xl lg:text-left lg:sticky text-center sticky lg:top-18 lg:mt-16">Mobile Development</h2>
      </section>

      <section className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 rounded-2xl bg-(--card-bg) border border-(--card-border) shadow-2xl ring-1 ring-(--card-ring) flex flex-col gap-8">
      <SkillGroup title="Platform">
          <Skill icon="/logos/android.png" label="Android" />
        </SkillGroup>

        <SkillGroup title="Languages">
          <Skill icon="/logos/kotlin.png" label="Kotlin" />
        </SkillGroup>

        <SkillGroup title="UI Framework">
          <Skill icon="/logos/jetpackcompose.png" label="Jetpack Compose" />
        </SkillGroup>
      </section>
    </div>
  );
}

export default MobileDev;
