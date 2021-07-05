import { useState, useEffect } from "react";
import { useViewportScroll, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

import { PricesHero } from "./PricesStyles";

const Prices = () => {
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useViewportScroll();
  const CreateAnimation = useAnimation();

  const changeAnimation = useMediaQuery({ query: "(max-height: 550px)" });

  const { inView, ref } = useInView({
    threshold: changeAnimation ? 0.4 : 0.47,
    triggerOnce: true
  });

  useEffect(() => {
    scrollYProgress.onChange(n => setScrollY(n));
    //   Animate
    if (inView) {
      CreateAnimation.start({
        opacity: 1,
        transition: { duration: 0.3 }
      });
    } else {
      CreateAnimation.start({
        opacity: 0
      });
    }
  }, [scrollY, scrollYProgress, inView]);

  const changeText = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div ref={ref}>
      <PricesHero animate={CreateAnimation}>
        <h2>Precios</h2>
        {changeText ? (
          <p>
            Los costos de arreglo van desde 3.000 <br /> COP en adelante, todo
            depende de el tipo <br /> de prenda, materiales requeridos y <br />
            tiempo invertido.
          </p>
        ) : (
          <p>
            Los costos de arreglo van desde 3.000 COP en adelante, <br />
            todo depende de el tipo de prenda, materiales requeridos <br />y
            tiempo invertido.
          </p>
        )}
      </PricesHero>
    </div>
  );
};

export default Prices;
