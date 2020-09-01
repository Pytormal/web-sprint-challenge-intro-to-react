// Write your Character component here
import React from "react";
import Person from "./Characters";

const Card = ({ character }) => {
  return (
    <section className="characterContainer">
      <div className="card">
        <p className="name">Name: {character.name}</p>
        <p>Height: {character.height}</p>
        <div className="pop">
          <p>Gender: {character.gender}</p>
          <p>BirthDate: {character.birth_year}</p>
        </div>
      </div>
    </section>
  );
};
export default Card;
