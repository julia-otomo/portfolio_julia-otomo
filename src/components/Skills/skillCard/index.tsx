import { IconType } from "react-icons";

interface iSkillCardProps {
  id: number;
  title: string;
  image: string | IconType;
}

export const SkillCard = ({ id, title, image: Icon }: iSkillCardProps) => {
  return (
    <li id={String(id)} key={id} className="flex flex-col items-center gap-2">
      <Icon />
      <p>{title}</p>
    </li>
  );
};
