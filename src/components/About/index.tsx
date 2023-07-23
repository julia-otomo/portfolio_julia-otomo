export const AboutMe = () => {
  return (
    <div className="bg-pink-200 flex flex-col items-center " id="about">
      <div className="w-4/5 p-4 flex flex-col items-center box-border gap-8 mt-6 mb-6">
        <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
          SOBRE MIM
        </h2>
        <div className="flex flex-col items-center justify-center rounded-full w-52 h-52 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
          <div className="bg-[url('../assets/thumbnail_IMG_5016.jpg')] bg-cover bg-center w-48 h-48 rounded-full"></div>
        </div>

        <h3 className="text-lg text-center font-medium text-purple-950 lg:text-xl lg:w-4/5">
          Desde a infância, nutro uma paixão inabalável pela tecnologia, ao
          desfrutar tanto de jogos virtuais como dos sistemas de informação.
          Embora minha formação seja em Biomedicina, encontrei minha verdadeira
          afinidade no universo da programação. Meu propósito agora é
          aperfeiçoar-me incessantemente, explorando novas tecnologias para
          criar aplicações que facilitem a vida das pessoas. Além disso,
          acredito na importância da colaboração e do trabalho em equipe, pois
          sei que, juntos, podemos alcançar resultados ainda mais
          extraordinários. Estou aberta a novas parcerias e pronta para
          compartilhar conhecimentos, pois acredito que o conhecimento se
          multiplica quando é compartilhado ❤️.
        </h3>
      </div>
    </div>
  );
};
