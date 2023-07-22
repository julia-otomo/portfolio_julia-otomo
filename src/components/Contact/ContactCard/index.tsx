import { IconType } from "react-icons";

interface iContactCardProps {
  id: number;
  icon: string | IconType;
  link: string;
}

export const ContactCard = ({ id, icon: Icon, link }: iContactCardProps) => {
  return (
    <li id={String(id)}>
      <a href={link} target="_blank" className="w-full">
        <Icon />
      </a>
    </li>
  );
};
