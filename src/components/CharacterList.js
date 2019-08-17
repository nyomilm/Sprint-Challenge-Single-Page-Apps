import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res =>  setCharacters(res.data))
        .catch(error => console.error('Server Error', error));
    }, [setCharacters]);
  


  return (
    <section className="character-list grid-view">
      {characters.map(char =>(
        <CharacterCard
        key={char.id}
        name={char.name}
        status={char.status}
        species={char.species}
        gender={char.gender}
        origin={char.origin.name}
        location={char.location.name}
        image={char.image}
        />
      ))}
    </section>
  );
}
