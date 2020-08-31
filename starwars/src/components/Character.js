// Write your Character component here
import React from "react";

const Character = (props) => {
  const { character } = props;

  return (
    <div className="character-text">
      <span className="character">{character.name}</span>{" "}
      <span className="year">{character.birth_year}</span>
    </div>
  );
};

export default Character;
