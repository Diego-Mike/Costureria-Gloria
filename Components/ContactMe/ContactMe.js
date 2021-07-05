import Image from "next/image";
import { motion } from "framer-motion";

import { ContactHero, ContainContact, ContactText } from "./ContactMeStyled";

const ContactMe = () => {
  // Go to whatsapp chat

  const Whatsapp = () => {
    window.open("https://wa.me/573148231437", "_blank");
  };

  return (
    <div>
      <ContactHero>
        {/* Box */}
        <ContainContact>
          {/* Background image */}
          <Image
            src="/Y.png"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          {/*  */}
          <ContactText>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              onClick={Whatsapp}
            >
              <Image
                src="/whatsapp.svg"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </motion.div>
            <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              whatsapp
            </motion.span>
          </ContactText>
        </ContainContact>
      </ContactHero>
    </div>
  );
};

export default ContactMe;
