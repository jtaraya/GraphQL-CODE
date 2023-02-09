const UserList = [
    {
        id: 1,
        name: "Jabali",
        username: "bali",
        age: 1,
        nationality: "PORTUGAL",
        friends: [
            {
                id: 2,
                name: "Jacob",
                username: "capra",
                age: 39,
                nationality: "KENYA",
            },
            {
                id: 4,
                name: "Belinda",
                username: "sonnie",
                age: 35,
                nationality: "RWANDA",
            },
        ],
    },
    {
        id: 2,
        name: "Jacob",
        username: "capra",
        age: 39,
        nationality: "KENYA",
        friends: [
            {
                id: 4,
                name: "Belinda",
                username: "sonnie",
                age: 35,
                nationality: "RWANDA",
            },
        ],
    },
    {
        id: 3,
        name: "Pedro",
        username: "pedrotech",
        age: 21,
        nationality: "BRAZIL",
    },
    {
        id: 4,
        name: "Belinda",
        username: "sonnie",
        age: 35,
        nationality: "RWANDA",
    },
    {
        id: 5,
        name: "Senteu",
        username: "jason",
        age: 6,
        nationality: "JAMAICA",
    },

];

const MovieList = [
    {
        id: 6,
        name: "Story of Taraya",
        yearOfRelease: 2023,
        isInTheaters: false,
    },
    {
        id: 7,
        name: "Interstellar",
        yearOfRelease: 2007,
        isInTheaters: true,
    },
    {
        id: 8,
        name: "Matrix",
        yearOfRelease: 1999,
        isInTheaters: true,
    },
    {
        id: 9,
        name: "Edge Of Tomorrow",
        yearOfRelease: 2018,
        isInTheaters: true,
    },
];

module.exports = { UserList, MovieList };