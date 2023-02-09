import React, { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
            nationality
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            id
            name
            yearOfRelease
            isInTheaters
        }
    }
`

function DisplayData() {

    const [movieSearched, setMovieSearched] = useState("")

    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie, {data: movieSearchedData, error: movieError }] = useLazyQuery();

    if (loading) {
        return <h1> DATA IS LOADING...</h1>;
    }

    if(data) {
        console.log(data);
    }

    if (error) {
        console.log(error);
    }


    return <div>
        {data &&
             data.users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name} </h1>
                        <h1>Username: {user.username} </h1>
                        <h1>Age: {user.age} </h1>
                        <h1>Nationality: {user.nationality} </h1>
                </div>
            );
        })}

            {movieData &&
                        movieData.movies.map((movie) => {
                            return (
                                <div>
                                    <h1>Movie Name: {movie.name} </h1>
                            </div>
                        );
                    })}

                    <div>
                        <input
                         type="text"
                          placeholder="The Matrix..." 
                          onChange= {(event) => {
                            setMovieSearched(event.target.value)}} />
                        <button onClick={fetchMovie}> Fetch Data</button>
                    </div>
    </div>;
};

export default DisplayData;