import { iLanguagesInformation } from "../../../contexts/@types";
import img from "../../../assets/soft-blurred-pastel-holographic-design-vector.jpg";

interface iProjectProps {
  id: string;
  title: string;
  year: number;
  description: string;
  image?: string;
  githubPage: string;
  vercelPage?: string;
  languages: iLanguagesInformation[];
}

export const ProjectCard = ({
  id,
  title,
  year,
  description,
  image,
  githubPage,
  vercelPage,
  languages,
}: iProjectProps) => {
  return (
    <li id={id}>
      <img src={image ? image : img} alt="" />

      <div>
        <h3>{title}</h3>
        <span>{year}</span>
        <p>{description}</p>
        <p>{githubPage}</p>
        {vercelPage ? <p>{vercelPage}</p> : null}
        <ul>
          {languages.map((lang) => (
            <span id={lang.id} key={lang.id}>
              {lang.name}
            </span>
          ))}
        </ul>
      </div>
    </li>
  );
};
