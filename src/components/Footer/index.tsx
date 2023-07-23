export const Footer = () => {
  return (
    <div className="bg-green-100 flex flex-col items-center">
      <div className="bg-green-100 flex flex-col items-center w-4/5 mt-6 mb-6 h-full gap-3">
        <h3 className="font-medium text-lg text-violet-900">
          Feito com carinho ❤️{" "}
        </h3>
        <h3 className="text-lg font-medium text-center bg-gradient-to-r from-pink-500  via-violet-500 to-sky-500 text-transparent bg-clip-text animate-gradient">
          © Copyright 2023, Julia Duarte - All Rights Reserved.
        </h3>
      </div>
    </div>
  );
};
