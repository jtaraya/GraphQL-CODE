const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        // USER RESOLVERS
        users: () => {
            return UserList;
        },
        //If not using a parent use (_, args) to get access we passed in typeDefs (user(id: ID!):User!)
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        // MOVIES RESOLVERS
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        },
    },
    User: {
        favoriteMovies: () => {
            return _.filter(
                MovieList,
                (movie) => 
                movie.yearOfRelease >= 1998 && movie.yearOfRelease <= 2002
                );
        },
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length-1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },

        updateUsername: (parent, args) => {
            const { id, newUsername} = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            });

            return userUpdated;
        },
    },
};

module.exports = { resolvers };