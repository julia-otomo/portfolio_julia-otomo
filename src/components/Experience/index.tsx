export const Experience = () => {
  return (
    <div id="experience" className="flex flex-col items-center bg-blue-200">
      <div className="flex flex-col gap-8 items-center w-4/5 p-4 mt-6 mb-6 border-box">
        <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          EXPERIÊNCIA
        </h2>

        <div className="flex flex-col gap-2 bg-slate-50 p-3 border-box w-full lg:w-8/12 border-4 border-dotted border-purple-900 rounded-lg">
          <h3 className="font-medium text-lg  text-violet-900">
            Monitora de Ensino do curso de Desenvolvimento-Web Full-Stack
          </h3>
          <p className="text-slate-900">Kenzie Academy Brasil</p>
          <span className="text-slate-800 text-sm">Nov/2022 - Jul/2023</span>
          <p className="text-slate-900">
            <b className="text-violet-600 text-justify">Responsabilidades:</b>{" "}
            Contato ativo com os alunos. Correção de entregas relacionadas ao
            Javascript, HTML, CSS, API REST, lógica de programação, NodeJs,
            Express, PostgreSQL, TypeORM. Assistência no canal de dúvidas.
            Relatório sobre os alunos.
          </p>
        </div>

        <a
          href="https://drive.google.com/file/d/1GOFsI6jmgCwhTVBJxdfBW14cP7MFcjaH/view"
          target="_blank"
          className="text-center bg-violet-50 rounded-3xl w-11/12 max-w-button p-2 border-box font-medium text-violet-900 border-4 border-violet-900 text-lg hover:bg-violet-900 hover:text-slate-50 shadow-inner shadow-neon-purple transition duration-2000"
        >
          Ver Currículo
        </a>
      </div>
    </div>
  );
};
