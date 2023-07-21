/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SkillCard } from "./skillCard";
import { skillsIcons } from "./stackData";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center bg-purple-400"
    >
      <div className="w-4/5 flex flex-col items-center bg-blue-400 p-4 box-border gap-5">
        <h2>Competências</h2>
        <ul className="bg-pink-400 w-full flex flex-row flex-wrap gap-5  justify-center p-4 box-border">
          {skillsIcons.map((skill) => (
            <SkillCard id={skill.id} title={skill.title} image={skill.image} />
          ))}
        </ul>
      </div>
    </div>
  );
};
