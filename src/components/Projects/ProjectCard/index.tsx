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
    <li
      id={id}
      className="flex flex-col gap-4 w-full lg:w-2/5  max-w-sm bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg "
    >
      <img
        src={image ? image : img}
        alt=""
        className="rounded-t-lg"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <div className=" flex flex-col gap-3 px-4 pb-4 border-box h-fit">
        <h3 className="text-xl font-medium text-purple-900">{title}</h3>
        <span className="text-gray-800">{year}</span>
        <p className="text-gray-900 text-justify text-sm">
          <b className="text-purple-600 text-base">Descrição: </b>
          {description}
        </p>
        <a
          href={githubPage}
          target="_blank"
          className="text-gray-900 cursor-pointer hover:text-pink-500"
        >
          <b className="text-purple-600">Github: </b>
          {githubPage}
        </a>
        {vercelPage ? (
          <a
            href={vercelPage}
            target="_blank"
            className="text-gray-900 cursor-pointer hover:text-pink-500"
          >
            <b className="text-purple-600">Vercel: </b>
            {vercelPage}
          </a>
        ) : null}
        <ul className="flex flex-row gap-3 flex-wrap w-full">
          {languages.map((lang) => (
            <span
              id={lang.id}
              key={lang.id}
              className="bg-purple-500 px-3 py-1 border-box rounded-2xl font-medium text-slate-50 text-sm"
            >
              {lang.name}
            </span>
          ))}
        </ul>
      </div>
    </li>
  );
};
