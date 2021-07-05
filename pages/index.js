import Head from "next/head";

import Presentation from "../Components/Presentation/Presentation";
import Description from "../Components/Description/Description";
import DifferentWorks from "../Components/DifferentWorks/DifferentWorks";
import Prices from "../Components/Prices/Prices";
import Schedule from "../Components/Schedule/Schedule";
import ContactMe from "../Components/ContactMe/ContactMe";

const Home = () => {
  return (
    <>
      <Head>
        <title>Costurería Gloria</title>
      </Head>

      {/* Presentation */}
      <Presentation />
      {/* Description */}
      <Description />
      {/* types of works */}
      <DifferentWorks />
      {/* Prices */}
      <Prices />
      {/* Schedule */}
      <Schedule />
      {/* Contact */}
      <ContactMe />
    </>
  );
};

export default Home;
