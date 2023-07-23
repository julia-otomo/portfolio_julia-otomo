/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SkillCard } from "./skillCard";
import { skillsIcons } from "./stackData";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center bg-violet-200"
    >
      <div className="w-4/5 flex flex-col items-center  p-4 box-border gap-8 mt-6 mb-6">
        <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
          COMPETÊNCIAS
        </h2>
        <ul className=" w-full flex flex-row flex-wrap gap-8  justify-center p-4 box-border  ">
          {skillsIcons.map((skill) => (
            <SkillCard
              id={skill.id}
              title={skill.title}
              image={skill.image}
              key={skill.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
