const { UserList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        //If not using a parent use (_, args) to get access we passed in typeDefs (user(id: ID!):User!)
        user: (_, args) => {
            const id = args.id;

        }
    },
};

module.exports = { resolvers };