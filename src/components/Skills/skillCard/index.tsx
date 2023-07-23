import { IconType } from "react-icons";

interface iSkillCardProps {
  id: number;
  title: string;
  image: string | IconType;
}

export const SkillCard = ({ id, title, image: Icon }: iSkillCardProps) => {
  return (
    <li
      id={String(id)}
      key={id}
      className="transition duration-300 ease-in-out hover:scale-125  flex flex-col items-center justify-center gap-3 border-4 border-transparent  hover:bg-slate-50 p-2 border-box rounded-lg hover:border-4 hover:border-pink-600 cursor-pointer"
      style={{
        width: "50%",
        height: "150px",
        maxWidth: "150px",
        fontSize: "1rem",
        transitionDuration: "1s",
      }}
    >
      <Icon
        className="fill-pink-600"
        style={{ width: "90%", height: "100%" }}
      />
      <p className="font-medium text-pink-600 text-center max-w-fit">{title}</p>
    </li>
  );
};
