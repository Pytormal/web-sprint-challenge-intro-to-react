import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";
import "./Characters.css";

export default function Person() {
  const [person, setPerson] = useState([]);

  // Fetch characters from the API in an effect hook.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setPerson(res.data.results);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

return (
    <div>
    {person.map(character => {
      return <Card character={character} key={character.id} />;
    })}
    </div>
  );
}