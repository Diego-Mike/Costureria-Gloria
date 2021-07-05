import Image from "next/image";
import { useEffect, useState } from "react";
import { useAnimation, useViewportScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

import {
  DifferentWorksHero,
  ContainDifferentWorks,
  DifferentWorksCard,
  DifferentWorksCardImg
} from "./DifferentWorksStyled";

const DifferentWorks = () => {
  const [scrollY, setScrollY] = useState(0);

  const CreateAnimation = useAnimation();
  const { scrollYProgress } = useViewportScroll();

  const changeAnimation = useMediaQuery({ query: "(max-width: 850px)" });
  const changeAnimation2 = useMediaQuery({ query: "(max-height: 550px)" });

  const { inView, ref } = useInView({
    threshold: changeAnimation2 ? 0.2 : 0.43,
    triggerOnce: true
  });

  useEffect(() => {
    scrollYProgress.onChange(n => setScrollY(n));
    // Animate - big screen
    if (inView && !changeAnimation) {
      CreateAnimation.start({
        opacity: 1,
        transition: { duration: 0.3 }
      });
    } else if (!changeAnimation) {
      CreateAnimation.start({
        opacity: 0
      });
    }
    // Animate - small screen
    if (inView && changeAnimation) {
     
      CreateAnimation.start({
        opacity: 1,
        transition: { duration: 0.3 }
      });
    } else if (changeAnimation) {
      CreateAnimation.start({
        opacity: 0
      });
    }
  }, [inView, scrollYProgress, scrollY]);


  return (
    <div ref={ref}>
      <DifferentWorksHero>
        {/* Title */}
        <h2>Tipos de arreglos</h2>
        {/* Cards */}
        <ContainDifferentWorks animate={CreateAnimation}>
          {/* The cards */}
          <DifferentWorksCard>
            <h3>Camisas y chaquetas</h3>

            <hr />

            <DifferentWorksCardImg>
              <div>
                <Image
                  src="/shirt.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/jacket.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </DifferentWorksCardImg>
          </DifferentWorksCard>

          <DifferentWorksCard>
            <h3>Jeans y pantalones</h3>

            <hr />

            <DifferentWorksCardImg>
              <div>
                <Image
                  src="/jeans.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/shorts.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </DifferentWorksCardImg>
          </DifferentWorksCard>

          <DifferentWorksCard>
            <h3>Vestidos y faldas</h3>

            <hr />

            <DifferentWorksCardImg>
              <div>
                <Image
                  src="/dress.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/skirt.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </DifferentWorksCardImg>
          </DifferentWorksCard>

          <DifferentWorksCard>
            <h3>Almohadas y cortinas</h3>

            <hr />

            <DifferentWorksCardImg>
              <div>
                <Image
                  src="/pillows.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/curtains.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </DifferentWorksCardImg>
          </DifferentWorksCard>

          <DifferentWorksCard>
            <h3>Bolsos</h3>

            <hr />

            <DifferentWorksCardImg>
              <div>
                <Image
                  src="/backpack.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </DifferentWorksCardImg>
          </DifferentWorksCard>
        </ContainDifferentWorks>
      </DifferentWorksHero>
    </div>
  );
};

export default DifferentWorks;
