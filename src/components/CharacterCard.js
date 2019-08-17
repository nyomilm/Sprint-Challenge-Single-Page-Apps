import React from "react";

export default function CharacterCard({ name, status, species, gender, origin, location, image}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Location: {location}</p>
      <p>species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Status {status}</p>
      <p>Origin: {origin}</p>

    </div>
  )
}
