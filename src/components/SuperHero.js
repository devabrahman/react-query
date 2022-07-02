import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHero = () => {
    const url = `http://localhost:4000/superheroes`;

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(data => {
                if ((data.status = 200)) {
                    setData(data.data);
                }
            })
        
        setLoading(false)
    },[url])

    if (isLoading) {
      return  <div>
            <h3>loading...</h3>
        </div>
    }

    return (
        <div>
            <h2>This is super hero section</h2>
            <div>
                <h1>Super Hero List</h1>
                <ul>
                    {data.map((hero) => (
                        <li key={hero.id}>{hero.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SuperHero;
