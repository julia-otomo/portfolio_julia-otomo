/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ContactCard } from "./ContactCard";
import { contactData } from "./contactData";

export const Contact = () => {
  return (
    <div className="bg-pink-300 flex flex-col items-center" id="contact">
      <div className="w-4/5 flex flex-col items-center p-4 border-box gap-5">
        <h2>CONTATO</h2>
        <ul className="flex flex-row gap-5">
          {contactData.map((contact) => (
            <ContactCard
              id={contact.id}
              icon={contact.icon}
              link={contact.link}
            />
          ))}
        </ul>
        <h3>Fique à vontade para entrar em contato comigo 🌸</h3>
      </div>
    </div>
  );
};
