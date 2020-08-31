import React from "react";
import Character from "./Character";
import "./Characters.css";

const Characters = (props) => {
  const { characters } = props;

  return <div className="character-text">rendered from characters.js</div>;
};

export default Characters;
