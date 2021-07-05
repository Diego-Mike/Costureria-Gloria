import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const ResponsiveSchedule = {
  responsive1: "@media screen and (max-width: 900px)",
  responsive2: "@media screen and (max-width: 700px)",
  responsive3: "@media screen and (max-width: 640px)",
  responsive4: "@media screen and (max-width: 500px)",
  responsive5: "@media screen and (max-width: 400px)"
};

//

export const ScheduleHero = styles(motion.section)`

width: 100%;
min-height: 610px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

margin-top: 23rem;

h2{
    font-size: 6rem;
    text-align: center;

    ${ResponsiveSchedule.responsive1}{
        font-size: 5rem;
    }

    ${ResponsiveSchedule.responsive2}{
        font-size: 4rem;
    }

    ${ResponsiveSchedule.responsive4}{
        font-size: 3.5rem;
        padding-right: 3.5rem;
        padding-left: 3.5rem;
    }

}

`;

export const ContainSchedule = styles.div`

width: 100%;
height: 450px;

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

margin-top: 6rem;

`;

export const ContainScheduleCard = styles.div`

width: 35%;
height: 60%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

margin-top: 2rem;
 
&:first-child{
        
    div{
        position: relative;
        width: 125px;
        height: 125px;

        ${ResponsiveSchedule.responsive1}{
            width: 118px;
            height: 118px;
        }

        ${ResponsiveSchedule.responsive5}{
            width: 110px;
            height: 110px;
        }

    }

    h3{
        font-size: 3.8rem;
        font-weight: 400;
        padding-top: 4.3rem;
    
        ${ResponsiveSchedule.responsive1}{
            font-size: 3.4rem;
        }

        ${ResponsiveSchedule.responsive5}{
            font-size: 2.75rem;
        }

    }

}

&:last-child{
        
    div{
        position: relative;
        width: 115px;
        height: 115px;

        ${ResponsiveSchedule.responsive1}{
            width: 108px;
            height: 108px;
        }

        ${ResponsiveSchedule.responsive5}{
            width: 100px;
            height: 100px;
        }

    }

    h3{
        font-size: 3.8rem;
        font-weight: 400;
        padding-top: 5.2rem;
    
        ${ResponsiveSchedule.responsive1}{
            font-size: 3.4rem;
        }

        ${ResponsiveSchedule.responsive3}{
            padding-top: 4.5rem;
        }

        ${ResponsiveSchedule.responsive5}{
            font-size: 2.75rem;
        }

    }

}

${ResponsiveSchedule.responsive3}{
    width: 60%;
    margin-top: 4rem;
}

${ResponsiveSchedule.responsive5}{
    width: 90%;
    margin-top: 5rem;
}

`;
