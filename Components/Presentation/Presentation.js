import { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import {
  PresentationHero,
  PresentationBackground,
  PresentationText,
  PresentationUnderText,
  PresentationScissor,
  PresentationHero2,
  PresentationWrapper2,
  PresentationUnderText2,
  PresentationScissor2
} from "./PresentationStyled";

const Presentation = () => {
  // Framer motion - PopUp - scrollY

  const PopUpUnderTextDesktop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const { scrollYProgress } = useViewportScroll();

  const [YPosition, setYPosition] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange(v => setYPosition(v));
  }, [scrollYProgress, setYPosition]);

  // Change layout

  const changeLayout = useMediaQuery({ query: "(max-width: 1150px)" });

  const changeTitle = useMediaQuery({ query: "(max-width: 750px)" });

  return (
    <div>
      {/* If window's size is bigger than 1150px, render this layout */}
      {!changeLayout && (
        <PresentationHero>
          {/* Text */}
          <PresentationText>
            <h1>
              Costurería <br /> Gloria
            </h1>
            <p>
              Presteza, accesibilidad y excelcitud <br /> para la asistencia de
              arreglos <br /> de tus prendas y objetos textiles
            </p>
            {/* Scissor with undertext */}
            <PresentationUnderText
              variants={PopUpUnderTextDesktop}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/underText-Presentation.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </PresentationUnderText>
            <PresentationScissor
              animate={{
                left: `${
                  YPosition.toFixed(2) === "0.00"
                    ? 3
                    : YPosition.toFixed(2) * 750
                }%`,
                display: `${
                  YPosition.toFixed(2) * 750 >= 74 ? "none" : "block"
                }`
              }}
            >
              <Image
                src="/scissors.svg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </PresentationScissor>
          </PresentationText>
          {/* Img */}
          <PresentationBackground>
            <Image
              src="/Background.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </PresentationBackground>
        </PresentationHero>
      )}
      {/* If window's size is smaller than 1150px, render this layout */}
      {changeLayout && (
        <PresentationHero2>
          {/* Background */}
          <Image
            src="/main background img.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <PresentationWrapper2>
            {/* Text */}
            {changeTitle ? (
              <h1>
                Costurería <br /> Gloria
              </h1>
            ) : (
              <h1>Costurería Gloria</h1>
            )}

            <p>
              Presteza, accesibilidad y excelcitud <br /> para la asistencia de
              arreglos <br /> de tus prendas y objetos textiles
            </p>
            {/* Scissor with undertext */}
            <PresentationUnderText2>
              <Image
                src="/underText-Presentation.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </PresentationUnderText2>
            {console.log(15 + (Math.round(YPosition * 100) / 100) * 550)}
            <PresentationScissor2
              animate={{
                left: `${
                  YPosition.toFixed(2) === "0.00"
                    ? 15
                    : 15 + (Math.round(YPosition * 100) / 100) * 550
                }%`,
                display: `${
                  (Math.round(YPosition * 100) / 100) * 550 >= 54
                    ? "none"
                    : "block"
                }`
              }}
            >
              <Image
                src="/scissors.svg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </PresentationScissor2>
          </PresentationWrapper2>
        </PresentationHero2>
      )}
    </div>
  );
};

export default Presentation;
