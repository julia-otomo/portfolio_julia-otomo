import { Link } from "react-scroll";

import { useContext } from "react";
import { ProjectContext } from "../../../contexts/project.context";

interface iLinkProps {
  local: string;
  title: string;
}

export const HeaderButton = ({ local, title }: iLinkProps) => {
  const { setMenu } = useContext(ProjectContext);
  return (
    <Link
      to={local}
      smooth="true"
      duration={1000}
      onClick={() => setMenu(false)}
      offset={-64}
      className="text-lg font-medium text-slate-50 transition hover:duration-700 hover:bg-pink-400 lg:p-2 lg:border-box cursor-pointer lg:rounded-lg"
    >
      {title}
    </Link>
  );
};
