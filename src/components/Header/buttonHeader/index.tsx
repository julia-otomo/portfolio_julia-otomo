import { Link } from "react-scroll";

interface iLinkProps {
  local: string;
  title: string;
}

export const HeaderButton = ({ local, title }: iLinkProps) => {
  return (
    <Link to={local} smooth="true" duration={500}>
      {title}
    </Link>
  );
};
