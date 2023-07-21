import img from "../../assets/giphy.gif";

export const Home = () => {
  return (
    <div className="h-72">
      <div className="flex flex-col gap-2 items-center">
        <h2>OLÁ ! EU SOU</h2>
        <h2>JULIA OTOMO DUARTE</h2>
        <h2>FULL-STACK DEVELOPER</h2>
        <h3>
          Sejam bem-vindo(a) ao meu portfólio ! Sou ex-biomédica e
          desenvolvedora Web Full-Stack. Assim como na área da saúde, meu
          objetivo é criar aplicações que ofereçam soluções tecnológicas
          inovadoras e funcionais, proporcionando uma excelente experiência aos
          usuários. Explore meus projetos e descubra como posso agregar valor a
          suas ideias. Obrigada pela visita !
        </h3>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
