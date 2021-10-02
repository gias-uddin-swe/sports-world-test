import React from "react";
import AllTeams from "../AllTeams/AllTeams";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllTeams></AllTeams>
      <Footer></Footer>
    </div>
  );
};

export default Home;
