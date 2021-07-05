import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const ResponsivePrices = {
  responsive1: "@media screen and (max-width: 1000px)",
  responsive2: "@media screen and (max-width: 700px)",
  responsive3: "@media screen and (max-width: 450px)"
};

//

export const PricesHero = styles(motion.section)`

width: 100%;
height: 500px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

h2{
    font-size: 6rem;
    padding-top: 2rem;

    ${ResponsivePrices.responsive1}{
        font-size: 5.5rem;
    }
    
    ${ResponsivePrices.responsive2}{
        font-size: 4.7rem;
    }

    ${ResponsivePrices.responsive3}{
        font-size: 4.3rem;
    }

}

p{
    font-size: 2.9rem;
    text-align: center;
    font-weight: 300;

    padding-top: 6.5rem;

    ${ResponsivePrices.responsive1}{
        font-size: 2.4rem;
    }

    ${ResponsivePrices.responsive2}{
        font-size: 1.9rem;
    }

    ${ResponsivePrices.responsive3}{
        font-size: 1.7rem;
    }
}

margin-top: 38rem;

`;
