const { UserList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        //If not using a parent use (_, args) to get access we passed in typeDefs (user(id: ID!):User!)
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },
    },
};

module.exports = { resolvers };