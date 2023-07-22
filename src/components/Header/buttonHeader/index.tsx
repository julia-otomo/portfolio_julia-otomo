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
    >
      {title}
    </Link>
  );
};
