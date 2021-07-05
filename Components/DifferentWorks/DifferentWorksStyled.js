import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const ResponsiveDifferentWorks = {
  responsive1: "@media screen and (max-width: 1250px)",
  responsive2: "@media screen and (max-width: 1050px)",
  responsive3: "@media screen and (max-width: 890px)",
  responsive4: "@media screen and (max-width: 850px)",
  responsive5: "@media screen and (max-width: 650px)",
  responsive6: "@media screen and (max-width: 510px)",
  responsive7: "@media screen and (max-width: 425px)"
};

//

export const DifferentWorksHero = styles.section`

width: 100%;
min-height: 663px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

margin-top: 28rem;

h2{
    font-size: 9rem;
    font-weight: 600;

    padding-left: 7rem;

    ${ResponsiveDifferentWorks.responsive2}{
        font-size: 8.8rem;
        padding-left: 6.5rem;
    }

    ${ResponsiveDifferentWorks.responsive3}{
        font-size: 8.6rem;
        padding-left: 8.2rem;
        text-align: center;
    }

    ${ResponsiveDifferentWorks.responsive4}{
        font-size: 8rem;
        padding: 0rem 2.5rem;
        margin: 0 auto;
    }

    ${ResponsiveDifferentWorks.responsive5}{
        font-size: 5.5rem;
    }

    ${ResponsiveDifferentWorks.responsive6}{
        font-size: 4.5rem;
    }

    ${ResponsiveDifferentWorks.responsive7}{
        font-size: 4.3rem;
    }
}

${ResponsiveDifferentWorks.responsive2}{
    margin-top: 26rem;
}

${ResponsiveDifferentWorks.responsive3}{
    margin-top: 24rem;
}

`;

export const ContainDifferentWorks = styles(motion.div)`

width: 95%;
min-height: 550px;
margin: 0 auto;

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;

margin-top: 10rem;
margin-bottom: 4rem;

${ResponsiveDifferentWorks.responsive2}{
    width: 100%;
    margin-top: 8rem;
}

`;

export const DifferentWorksCard = styles.div`

width: 30%;
height: 170px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

border: 2px solid #5CFFB1;
border-radius: 0.7rem;

margin: 10rem 5rem 0rem 5rem;

h3{
    font-size: 3rem;
    padding-top: 1.7rem;

    ${ResponsiveDifferentWorks.responsive1}{
        font-size: 2.8rem;
    }

    ${ResponsiveDifferentWorks.responsive2}{
        font-size: 2.5rem;
    }

    ${ResponsiveDifferentWorks.responsive6}{
        font-size: 2.2rem;
    }

    ${ResponsiveDifferentWorks.responsive7}{
        font-size: 2rem;
    }
}

hr{
    width: 88%;
    margin: 0 auto;

    margin-top: 1.5rem;
    background: white;
}

${ResponsiveDifferentWorks.responsive1}{
    width: 35%;
}

${ResponsiveDifferentWorks.responsive2}{
    width: 36%;
    margin-top: 9rem;
}

${ResponsiveDifferentWorks.responsive3}{
    width: 38%;
    height: 165px;
}

${ResponsiveDifferentWorks.responsive4}{
    width: 52%;
    margin-left: 0rem;
    margin-right: 0rem;
    margin-top: 8rem;
}

${ResponsiveDifferentWorks.responsive5}{
    width: 65%;
}

${ResponsiveDifferentWorks.responsive6}{
    width: 75%;
    height: 155px;
} 

${ResponsiveDifferentWorks.responsive7}{
    width: 80%;
    height: 150px;
    margin-top: 7rem;
} 

`;

export const DifferentWorksCardImg = styles.div`

width: 88%;
height: 65px;
margin 0 auto;

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

div{
    position: relative;

    width: 45px;
    height: 45px;

    ${ResponsiveDifferentWorks.responsive2}{
        height: 42px;
        width: 42px;
    }

    ${ResponsiveDifferentWorks.responsive6}{
        height: 40px;
        width: 40px;
    }

    ${ResponsiveDifferentWorks.responsive7}{
        height: 37px;
        width: 37px;
    }

}

margin-top: 1rem;

${ResponsiveDifferentWorks.responsive2}{
    height: 70px;
}

`;
