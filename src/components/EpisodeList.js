import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
            .then(res => setEpisodes(res.data))
            .catch(error => console.error('Server Error', error));
    }, [setEpisodes]);

    return (
        <div>
            {episodes.map(char => (
                <EpisodeCard
                    key={episode.id}
                    name={episode.name}
                    airdate={episode.air_date}
                    episode={episode.episode}
                />


            ))}
        </div>
    )
}