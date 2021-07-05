import styles from "styled-components";

// Responsive

const ResponsiveContact = {
  responsive1: "@media screen and (max-width: 700px)",
  responsive2: "@media screen and (max-width: 640px)",
  responsive3: "@media screen and (max-width: 460px)"
};

//

export const ContactHero = styles.section`

width: 100%;
height: 270px;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

margin-top: 25rem;

${ResponsiveContact.responsive2}{
    height: 190px;
    margin-top: 30rem;
}

${ResponsiveContact.responsive3}{
    height: 180px;
}

`;

export const ContainContact = styles.div`

position: relative;

width: 100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

`;

export const ContactText = styles.div`

width: 100%;
height: 100px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

z-index: 10;

div{
    position: relative;

    width: 36px;
    height: 36px;
    
    cursor: pointer;

    ${ResponsiveContact.responsive2}{
        width: 34px;
        height: 34px;
    }

    ${ResponsiveContact.responsive2}{
        width: 32px;
        height: 32px;
    }
}

span{
    color: #26C963;
    font-size: 3.8rem;
    font-weight: 500;
    
    padding-left: 7rem;
    padding-right: 7rem;

    cursor: pointer;

    ${ResponsiveContact.responsive1}{
        font-size: 3.6rem;

        padding-left: 6rem;
        padding-right: 5.5rem;
    }

    ${ResponsiveContact.responsive2}{
        font-size: 3.4rem;

        padding-left: 5rem;
        padding-right: 3.5rem;
    }

    ${ResponsiveContact.responsive3}{
        font-size: 2.7rem;

        padding-left: 4rem;
        padding-right: 3rem;
    }

}

`;
