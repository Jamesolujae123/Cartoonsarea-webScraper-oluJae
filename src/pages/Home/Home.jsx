import React from "react";
import Hero from "../../components/Hero/Hero";
import Desc from "../../components/Desc/Desc";
import Benefits from "../../components/Benefits/Benefits";
import Instructions from "../../components/Instructions&features/Instructions";
import Tip from "../../components/TIp/Tip";

const Home = () => {
  return (
    <div>
      <Hero />
      <Desc />
      <Instructions />
      <Benefits />
      <Tip />
    </div>
  );
};

export default Home;
