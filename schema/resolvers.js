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
        movies: () => {},
        movie: () => {},
    },
};

module.exports = { resolvers };