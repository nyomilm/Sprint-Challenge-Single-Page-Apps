import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => setLocations(res.data))
            .catch(error => console.error('Server Error', error));
    }, [setLocations]);

    return (
        <section className="grid-view">
            {locations.map(location => (
                <LocationCard
                    key={location.id}
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    residents={location.residents}
                />
            ))}
        </section>
    );
}
