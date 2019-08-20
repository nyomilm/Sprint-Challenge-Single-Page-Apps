import React from "react";

export default function CharacterCard({ name, airDate, episode }) {
    return (
        <div className="ui card">

            <div className="content">
                <h2 className="header">{name}</h2>
                <div className="meta">
                    <span className="date">{episode}</span>
                </div>

                <div className="desription">
                    <p>Air Date: {airDate}</p>
                </div>
            </div>
        </div>
    )
}