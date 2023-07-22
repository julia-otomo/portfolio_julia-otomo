import img from "../../assets/giphy.gif";

export const Home = () => {
  return (
    <div className="bg-blue-400 " id="home">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-5 items-center w-4/5 p-4 box-border">
          <h2>OLÁ ! EU SOU</h2>
          <h2>JULIA OTOMO DUARTE</h2>
          <h2>FULL-STACK DEVELOPER</h2>
          <h3>
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
