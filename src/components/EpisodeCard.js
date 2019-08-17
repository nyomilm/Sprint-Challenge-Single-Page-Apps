import React from "react";

export default function CharacterCard({ namr, airdate, episode}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{episode}</p>
            <p>Air Date: {airDate}</p>
        </div>
    )
}