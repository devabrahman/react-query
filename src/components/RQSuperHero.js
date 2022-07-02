import React from "react";
import { Link } from "react-router-dom";
import useSuperHerosData from "../hooks/useSuperHerosData";

const RQSuperHero = () => {
    const onSuccess = (data) => {
        console.log("success the data",data);
    }
    const onError = (err) => {
        console.log("Error to data looad", err.message);
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(onSuccess, onError, {
        enable: false,
    });

    // console.log({ isLoading, isFetched });

    // console.log(data);

    if (isError) {
        return (
            <div>
                <h3>{error.message}</h3>
            </div>
        );
    }

    return (
        <div>
            <h1>This is React Query Section</h1>
            <div>
                <h1>Super Hero List</h1>
                <button onClick={refetch}>Load Heros</button>
                {isLoading || isFetching ? (
                    <div>
                        <h3>loading...</h3>
                    </div>

                ) : ""}
                <ul>
                    {data?.data?.map((hero) => (
                        
                        <Link key={hero.id} to={`${hero.id}`}><li key={hero.id}>{hero.name}</li></Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RQSuperHero;
