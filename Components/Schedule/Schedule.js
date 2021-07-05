import Image from "next/image";
import { useViewportScroll, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

import {
  ScheduleHero,
  ContainSchedule,
  ContainScheduleCard
} from "./ScheduleStyled";

const Schedule = () => {
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useViewportScroll();
  const CreateAnimation = useAnimation();

  const changeAnimation = useMediaQuery({ query: "(max-height: 550px)" });

  const { inView, ref } = useInView({
    threshold: changeAnimation ? 0.31 : 0.35,
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

  return (
    <div ref={ref}>
      <ScheduleHero animate={CreateAnimation}>
        {/* Title */}
        <h2>¿Horario de trabajo?</h2>
        {/* Cards */}
        <ContainSchedule>
          {/* Morning */}
          <ContainScheduleCard>
            <div>
              <Image src="/sun.svg" alt="" layout="fill" objectFit="cover" />
            </div>
            <h3>Desde 10 A.M</h3>
          </ContainScheduleCard>
          {/* Night */}
          <ContainScheduleCard>
            <div>
              <Image src="/moon.svg" alt="" layout="fill" objectFit="cover" />
            </div>
            <h3>Hasta 8 P.M</h3>
          </ContainScheduleCard>
        </ContainSchedule>
      </ScheduleHero>
    </div>
  );
};

export default Schedule;
