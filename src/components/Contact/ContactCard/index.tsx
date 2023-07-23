import { IconType } from "react-icons";

interface iContactCardProps {
  id: number;
  icon: string | IconType;
  link: string;
}

export const ContactCard = ({ id, icon: Icon, link }: iContactCardProps) => {
  return (
    <li id={String(id)} className="cursor-pointer hover:animate-bounce">
      <a href={link} target="_blank" className="w-full">
        <Icon
          style={{ width: "40px", height: "40px", transitionDuration: "1s" }}
          className="fill-violet-600 stroke-slate-50 hover:fill-pink-600"
        />
      </a>
    </li>
  );
};
