import { useState, useEffect } from "react";
import { useViewportScroll, useAnimation } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

import {
  DescriptionHero,
  DescriptionWrapper,
  SmallSquare,
  DescriptionImg,
  DescriptionText,
  DescriptionScissor,
  DescriptionLines
} from "./DescriptionStyles";

const Description = () => {
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useViewportScroll();
  const CreateAnimation = useAnimation();

  // Change the text and some items

  const changeTextAndItems = useMediaQuery({ query: "(max-width: 1050px)" });

  const changeTextToSmaller = useMediaQuery({ query: "(max-width: 630px)" });

  const changeTextToSmaller2 = useMediaQuery({ query: "(max-width: 480px)" });

  const changeAnimation2 = useMediaQuery({ query: "(max-height: 550px)" });

  const { inView, ref } = useInView({
    threshold: changeAnimation2 ? 0.3 : 0.4,
    triggerOnce: true
  });

  useEffect(() => {
    // Scroll y position
    scrollYProgress.onChange(number => setScrollY(number));
    // Animate - big screen
    if (inView && !changeTextAndItems) {
      CreateAnimation.start({
        opacity: 1,
        transition: { duration: 0.3 }
      });
    } else if (!changeTextAndItems) {
      CreateAnimation.start({ opacity: 0 });
    }
    // Animate - small screen
    if (inView && changeTextAndItems) {
      CreateAnimation.start({
        opacity: 1,
        transition: { duration: 0.3 }
      });
    } else if (changeTextAndItems) {
      CreateAnimation.start({ opacity: 0 });
    }
  }, [scrollYProgress, scrollY, inView]);

  return (
    <div ref={ref}>
      <DescriptionHero animate={CreateAnimation}>
        {/* Small square in the on the corner */}
        <SmallSquare />
        {/* Scissor and Lines */}
        {changeTextAndItems ? (
          <DescriptionScissor
            animate={{
              left: `${
                Math.round(scrollY * 100) / 100 + 8 * 320 - 20 <= 39.2
                  ? 8
                  : 8 + (Math.round(scrollY * 100) / 100) * 320 - 20
              }%`,
              display: `${
                (Math.round(scrollY * 100) / 100) * 320 - 20 + 8 >= 64.5
                  ? "none"
                  : "block"
              }`
            }}
          >
            <Image src="/scissors.svg" alt="" layout="fill" objectFit="cover" />
          </DescriptionScissor>
        ) : (
          <DescriptionScissor
            animate={{
              top: `${
                (Math.round(scrollY * 100) / 100) * 250 < 41
                  ? 2
                  : 2 + (Math.round(scrollY * 100) / 100) * 250
              }%`,
              display: `${
                (Math.round(scrollY * 100) / 100) * 250 + 2 >= 78
                  ? "none"
                  : "block"
              }`
            }}
          >
            <Image src="/scissors.svg" alt="" layout="fill" objectFit="cover" />
          </DescriptionScissor>
        )}

        <DescriptionLines>
          <Image src="/Lines.png" alt="" layout="fill" objectFit="cover" />
        </DescriptionLines>

        <DescriptionWrapper>
          {/* Img */}
          <DescriptionImg>
            <div>
              <Image
                src="/mannequin.svg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </DescriptionImg>
          {/* Text */}
          <DescriptionText>
            <h2>¿De qué se trata?</h2>
            {/* Render text based on window's size so we make text smaller in width's size, but larget in height */}
            {changeTextToSmaller && changeTextAndItems && changeTextToSmaller2 && (
              <p>
                Costurería gloria es un pequeño <br /> negocio enfocado en
                arreglos de <br /> retoques de prendas y/o diferentes <br />
                objetos tipo textiles. Trabajo desde <br /> jeans, camisas,
                chaquetas y <br /> bolsos, hasta cortinas y crear <br /> fundas
                de almohadas, entre <br /> otras cosas.
              </p>
            )}
            {changeTextToSmaller &&
              changeTextAndItems &&
              !changeTextToSmaller2 && (
                <p>
                  Costurería gloria es un pequeño negocio enfocado <br /> en
                  arreglos de retoques de prendas y/o diferentes <br /> objetos
                  tipo textiles. Trabajo desde jeans, camisas, <br /> chaquetas
                  y bolsos, hasta cortinas y crear fundas <br /> de almohadas,
                  entre otras cosas.
                </p>
              )}
            {changeTextAndItems &&
              !changeTextToSmaller &&
              !changeTextToSmaller2 && (
                <p>
                  Costurería gloria es un pequeño negocio enfocado en arreglos
                  de retoques <br /> de prendas y/o diferentes objetos tipo
                  textiles. Trabajo desde jeans, camisas, <br /> chaquetas y
                  bolsos, hasta cortinas y crear fundas de almohadas, <br />{" "}
                  entre otras cosas.
                </p>
              )}
            {!changeTextAndItems && (
              <p>
                Costurería gloria es un pequeño <br /> negocio enfocado en
                arreglos de <br /> retoques de prendas y/o diferentes <br />
                objetos tipo textiles. Trabajo desde <br /> jeans, camisas,
                chaquetas y bolsos,
                <br /> hasta cortinas y crear fundas de <br /> almohadas, entre
                otras cosas.
              </p>
            )}
          </DescriptionText>
        </DescriptionWrapper>
      </DescriptionHero>
    </div>
  );
};

export default Description;
