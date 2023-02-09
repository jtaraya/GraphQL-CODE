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
`;

const GET_MOVIE_BY_NAME = gql`
query Movie($name: String!){
    movie(name: $name){
        name
        yearOfRelease
    }
}
`;

function DisplayData() {

    const [movieSearched, setMovieSearched] = useState("")

    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie,
         {data: movieSearchedData, error: movieError }
        ] = useLazyQuery(GET_MOVIE_BY_NAME);

    if (loading) {
        return <h1> DATA IS LOADING...</h1>;
    }

    if(data) {
        console.log(data);
    }

    if (error) {
        console.log(error);
    }

    if (movieError) {
        console.log(movieError);
    }


    return (
    <div>
        <div>
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Username..." />
            <input type="number" placeholder="Age..." />
            <input type="text" placeholder="Nationality..." />
            <button> Create User </button>
        </div>
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
                        <button 
                        onClick={() => {fetchMovie({variables: {
                            name: movieSearched,},
                            });
                        }}> 
                        Fetch Data
                        </button>
                        <div>
                            {movieSearchedData && (
                                <div> 
                                <h1> MovieName: {movieSearchedData.movie.name} </h1>
                                <h1> yearOfRelease: {movieSearchedData.movie.yearOfRelease} </h1>
                                </div>
                                )}
                                {movieError && <h1> There was an error fetching the data </h1>}
                        </div>
                    </div>
    </div>
    );
}

export default DisplayData;