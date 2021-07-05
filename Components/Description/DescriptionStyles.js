import styles from "styled-components";
import { motion } from "framer-motion";

// Description responsive

const ResponsiveDescription = {
  responsive1: "@media screen and (max-width: 1260px)",
  responsive2: "@media screen and (max-width: 1190px)",
  responsive3: "@media screen and (max-width: 1100px)",
  responsive4: "@media screen and (max-width: 1050px)",
  responsive5: "@media screen and (max-width: 870px)",
  responsive6: "@media screen and (max-width: 630px)",
  responsive7: "@media screen and (max-width: 480px)",
  responsive8: "@media screen and (max-width: 380px)"
};

//

export const DescriptionHero = styles(motion.section)`

position: relative;

width: 100%;
height: 663px;

display: flex;
align-items: center;
justify-content: center;

margin-top: 10rem;

overflow: hidden;

${ResponsiveDescription.responsive4}{
    height: 750px;
}

${ResponsiveDescription.responsive6}{
    margin-top: 9rem;
}


`;

export const DescriptionWrapper = styles(motion.div)`

width: 100%;
height: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

overflow: hidden;

${ResponsiveDescription.responsive3}{
    justify-content: space-between;
}

${ResponsiveDescription.responsive4}{
    flex-direction: column-reverse;
    justify-content: flex-start;
}

`;

export const SmallSquare = styles.div`

position: absolute;
top: 0;
left: 0;

width: 40px;
height: 40px;

background: #FF3471;

${ResponsiveDescription.responsive4}{
    width: 0px;
    height: 0px;

    display: none;
}

`;

export const DescriptionImg = styles.div`

width: 45%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

div{
    position: relative;
    width: 250px;
    height: 400px;

    ${ResponsiveDescription.responsive2}{
        width: 200px;
        height: 360px;
    }

    ${ResponsiveDescription.responsive4}{
        width: 180px;
        height: 300px;
    }

    ${ResponsiveDescription.responsive5}{
        width: 150px;
        height: 290px;
    }

    ${ResponsiveDescription.responsive6}{
        width: 120px;
        height: 270px;
    }

    ${ResponsiveDescription.responsive7}{
        width: 100px;
        height: 225px;
    }

}

overflow: hidden;

${ResponsiveDescription.responsive3}{
    width: 38%;
}

${ResponsiveDescription.responsive4}{
    width: 100%;
    height: 55%;
}

${ResponsiveDescription.responsive6}{
    height: 52%;
}

`;

export const DescriptionText = styles.div`

width: 55%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

overflow: hidden;

h2{
    font-size: 6rem;
    padding-right: 1rem;

    ${ResponsiveDescription.responsive2}{
        font-size: 5.5rem;
    }

    ${ResponsiveDescription.responsive4}{
        font-size: 5rem;
        padding-right: 0rem;
        padding-top: 3rem;
    }

    ${ResponsiveDescription.responsive5}{
        font-size: 4.7rem;
    }

    ${ResponsiveDescription.responsive6}{
        font-size: 4.5rem;
    }

    ${ResponsiveDescription.responsive7}{
        font-size: 4rem;
        padding-top: 1rem;
    }

    ${ResponsiveDescription.responsive8}{
        font-size: 3.2rem;
    }

}

p{
    font-size: 3rem;
    font-weight: 300;
    text-align: left;

    padding-right: 1rem;
    padding-top: 3rem;

    ${ResponsiveDescription.responsive2}{
        font-size: 2.6rem;
    }

    ${ResponsiveDescription.responsive4}{
        font-size: 2.1rem;
        text-align: center;

        padding-top: 2rem;
    }

    ${ResponsiveDescription.responsive5}{
        font-size: 1.8rem;
        padding-top: 3rem;
    }

    ${ResponsiveDescription.responsive6}{
        font-size: 1.7rem;
    }

    ${ResponsiveDescription.responsive8}{
        font-size: 1.65rem;
    }

}

${ResponsiveDescription.responsive4}{
    width: 100%;
    height: 45%;
    justify-content: flex-start;
}

`;

export const DescriptionScissor = styles(motion.div)`

position: absolute;
top: 2%;
left: 40%;

transform: rotateZ(127deg);

width: 50px;
height: 50px;

z-index: 10;

${ResponsiveDescription.responsive2}{
    width: 45px;
    height: 45px;

    left: 40.1%;
}

${ResponsiveDescription.responsive3}{
    width: 40px;
    height: 40px;

    left: 38.5%;
}

${ResponsiveDescription.responsive4}{
    transform: rotateZ(35deg);
    top: 38%;
    left: 8%;
}

${ResponsiveDescription.responsive5}{
    width: 35px;
    height: 35px;

    top: 39.7%;
}

${ResponsiveDescription.responsive6}{
    top: 44.5%;
}

${ResponsiveDescription.responsive7}{
    top: 49.7%;
}

`;

export const DescriptionLines = styles(motion.div)`

position: absolute;
top: 14%;
left: 42.1%;

width: 1.5px;
height: 530px;

z-index: 1;

${ResponsiveDescription.responsive1}{
    width: 1px;
    height: 525px;

    left: 42.2%;
}

${ResponsiveDescription.responsive2}{
    height: 500px;
}

${ResponsiveDescription.responsive3}{
    height: 480px;
    left: 40.5%;
}

${ResponsiveDescription.responsive4}{
    transform: rotateZ(90deg);
    left: 50%;
    top: 8.4%;
}

${ResponsiveDescription.responsive5}{
    height: 420px;
    top: 13.7%;
}

${ResponsiveDescription.responsive6}{
    height: 250px;
    top: 29.8%;
}

${ResponsiveDescription.responsive7}{
    height: 180px;
    top: 39.7%;
}

`;
