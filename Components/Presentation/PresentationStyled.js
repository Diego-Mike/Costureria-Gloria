import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive presentation

const ResponsivePresentation = {
  responsive1: "@media screen and (max-width: 1300px)",
  responsive2: "@media screen and (max-width: 1100px)",
  responsive3: "@media screen and (max-width: 850px)",
  responsive4: "@media screen and (max-width: 750px)",
  responsive5: "@media screen and (max-width: 650px)",
  responsive6: "@media screen and (max-width: 550px)",
  responsive7: "@media screen and (max-width: 470px)",
  responsive8: "@media screen and (max-width: 370px)"
};

//

export const PresentationHero = styles.section`

width: 100%;
height: 663px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

overflow: hidden;

`;

export const PresentationText = styles.div`

position: relative;

width: 50%;
height: 663px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

h1{
    font-size: 12rem;

    padding-top: 2.3rem;

    font-family: 'Oleo Script', cursive;
}

p{
    font-size: 2.7rem;
    font-weight: 300; 

    padding-right: 7rem;
    padding-top: 8.5rem;
}

overflow: hidden;

`;

export const PresentationUnderText = styles(motion.div)`

width: 500px;
height: 1.6px;

position: absolute;
bottom: 41%;

z-index: 10;

${ResponsivePresentation.responsive1}{
    width: 460px;
    height: 1.2px;
    bottom: 40.5%;
}

`;

export const PresentationScissor = styles(motion.div)`

width: 50px;
height: 50px;

transform: rotateZ(35deg);

position: absolute;
bottom: 36.8%;
left: 3%;

z-index: 15;

${ResponsivePresentation.responsive1}{
    width: 35px;
    bottom: 37.6%;
    height: 35px;
}

`;

export const PresentationBackground = styles.div`

position: relative;

width: 50%;
height: 663px;

`;

// Second layout

export const PresentationHero2 = styles.div`

position: relative;

width: 100%;
height: 663px;

display: flex; 
align-items: center;
justify-content: center;

overflow: hidden;

`;

export const PresentationWrapper2 = styles(motion.div)`

position: relative;

width: 100%;
height: 663px;
background: linear-gradient(to bottom, rgb(123, 8, 255, 0.9), rgb(123, 8, 255, 0.87));

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

h1{
    font-size: 12rem;
    font-family: 'Oleo Script', cursive;

    padding-top: 7rem;

    ${ResponsivePresentation.responsive2}{
        font-size: 11rem;
    }

    ${ResponsivePresentation.responsive3}{
        font-size: 10.3rem;
        padding-top: 9rem;
    }

    ${ResponsivePresentation.responsive4}{
        text-align: center;
        font-size: 11rem;
        padding-top: 4rem;
    }

    ${ResponsivePresentation.responsive5}{
        padding-top: 2rem;
    }

    ${ResponsivePresentation.responsive6}{
        font-size: 10rem;
        padding-top: 1rem;
    }

    ${ResponsivePresentation.responsive7}{
        font-size: 8rem;
        padding-top: 4rem;
    }

    ${ResponsivePresentation.responsive8}{
        font-size: 7rem;
        padding-top: 6rem;
    }
}

p{
    font-size: 2.7rem;
    font-weight: 300; 
    text-align: center;

    padding-top: 18rem;

    ${ResponsivePresentation.responsive2}{
        font-size: 2.5rem;
    }

    ${ResponsivePresentation.responsive3}{
        font-size: 2.2rem;
        padding-top: 21rem;
    }

    ${ResponsivePresentation.responsive4}{
        font-size: 2.1rem;
        padding-top: 13.5rem;
    }

    ${ResponsivePresentation.responsive6}{
        font-size: 2rem;
    }

    ${ResponsivePresentation.responsive7}{
        padding-top: 16rem;
        font-size: 1.9rem;
    }

    ${ResponsivePresentation.responsive8}{
        font-size: 1.8rem;
        padding-top: 17rem;
    }
}

overflow: hidden;


`;

export const PresentationUnderText2 = styles(motion.div)`

width: 500px;
height: 1.6px;

position: absolute;
bottom: 50%;

z-index: 10;

${ResponsivePresentation.responsive2}{
    width: 450px;
    height: 1.2px;
}

${ResponsivePresentation.responsive3}{
    bottom: 47%;
    width: 420px;
    height: 1px;
}

${ResponsivePresentation.responsive4}{
    width: 340px;
    bottom: 39%;
}

${ResponsivePresentation.responsive5}{
    width: 260px;
    bottom: 41%;
}

${ResponsivePresentation.responsive6}{
    width: 220px;
    bottom: 46%;
    height: 1.6px;
}

${ResponsivePresentation.responsive7}{
    width: 160px;
    bottom: 49%;
}

${ResponsivePresentation.responsive7}{
    width: 130px;
    height: 2px;
}

`;

export const PresentationScissor2 = styles(motion.div)`

width: 50px;
height: 50px;

transform: rotateZ(35deg);

position: absolute;
bottom: 45.8%;
left: 15%;

z-index: 15;

${ResponsivePresentation.responsive2}{
    width: 38px;
    height: 38px;
    bottom: 46.85%;
}

${ResponsivePresentation.responsive3}{
    bottom: 43.9%;
}

${ResponsivePresentation.responsive4}{
    bottom: 35.9%;
}

${ResponsivePresentation.responsive5}{
    bottom: 37.8%;
}

${ResponsivePresentation.responsive6}{
    bottom: 42.8%;
}

${ResponsivePresentation.responsive7}{
    width: 35px;
    bottom: 46%;
    height: 35px;
}

`;
