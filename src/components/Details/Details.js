import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Details.css";

import male from "../../images/male.png";
import female from "../../images/female.png";

const Details = () => {
  const { teamId } = useParams();
  console.log(teamId);

  const [details, setDetails] = useState({});

  console.log(details);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data?.teams[0]));
  }, []);

  return (
    <div className=" details-container">
      <MenuBar></MenuBar>
      <div className="details">
        <div className="male-female-img p-5">
          {details.strGender == "Male" ? (
            <img className="w-50" src={male} alt="" />
          ) : (
            <img className="w-50" src={female} alt="" />
          )}
        </div>

        <div className="row d-flex details-teams align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="team-img">
              <img className="w-50" src={details.strTeamBadge} alt="" />
            </div>
            <h3>{details?.strTeam}</h3>
            <p>{details?.strAlternate}</p>
            <p>{details?.strLeague}</p>
          </div>
          <div className="col-md-6">
            <div className="description-team">
              <p>{details.strDescriptionEN}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
