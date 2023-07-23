import img from "../../assets/giphy.gif";
import img2 from "../../assets/icons8-rabbit-48.png";

export const Home = () => {
  return (
    <div
      className="bg-[url('../assets/background.gif')] bg-no-repeat bg-cover"
      id="home"
    >
      <div className="flex flex-col items-center backdrop-blur-lg bg-rose-200 bg-opacity-60">
        <div className="flex flex-col gap-8 items-center w-4/5 p-4 mt-6 mb-6 box-border ">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center text-purple-950">
            OLÁ ! EU SOU
          </h2>
          <h2 className="text-2xl lg:text-3xl font-semibold text-center bg-gradient-to-r from-pink-500  via-violet-500 to-sky-500 text-transparent bg-clip-text animate-gradient">
            JULIA OTOMO DUARTE
          </h2>
          <div className="flex flex-row gap-2">
            <img
              src={img2}
              alt=""
              className="animate-bounce animate-infinite animate-ease-linear w-6 lg:w-10"
            />
            <img
              src={img2}
              alt=""
              className="animate-bounce animate-infinite animate-ease-linear w-6 lg:w-10"
            />
            <img
              src={img2}
              alt=""
              className="animate-bounce animate-infinite animate-ease-linear w-6 lg:w-10"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-center bg-gradient-to-r from-pink-500  via-violet-500 to-sky-500 text-transparent bg-clip-text animate-gradient">
            FULL-STACK DEVELOPER
          </h2>
          <h3 className="text-lg text-center font-medium text-purple-950 lg:text-xl w-4/5">
            Sejam bem-vindo(a) ao meu portfólio ! Sou ex-biomédica e
            desenvolvedora Web Full-Stack. Assim como na área da saúde, meu
            objetivo é criar aplicações que ofereçam soluções tecnológicas
            inovadoras e funcionais, proporcionando uma excelente experiência
            aos usuários. Explore meus projetos e descubra como posso agregar
            valor a suas ideias. Obrigada pela visita !
          </h3>
          <img src={img} alt="" className="w-1/4v max-w-bunny" />
        </div>
      </div>
    </div>
  );
};
