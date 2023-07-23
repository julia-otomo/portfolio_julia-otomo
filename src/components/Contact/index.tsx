/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ContactCard } from "./ContactCard";
import { contactData } from "./contactData";

export const Contact = () => {
  return (
    <div className="bg-yellow-100 flex flex-col items-center" id="contact">
      <div className="w-4/5 flex flex-col items-center p-4 border-box gap-8 mt-6 mb-6">
        <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          CONTATO
        </h2>
        <ul className="flex flex-row gap-5">
          {contactData.map((contact) => (
            <ContactCard
              id={contact.id}
              icon={contact.icon}
              link={contact.link}
              key={contact.id}
            />
          ))}
        </ul>
        <h3 className="font-medium text-xl text-center text-violet-900">
          Fique à vontade para entrar em contato comigo 🌸
        </h3>
      </div>
    </div>
  );
};
