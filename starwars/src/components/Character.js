// Write your Character component here
import React from "react";

const Character = (props) => {
  const { character } = props;

  return (
    <div >
      <span >{character.name}</span>{" "}
      <span >{character.birth_year}</span>
    </div>
  );
};

export default Character;
