const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }

    type Query {
        users: [User!]!
        user(id: ID!):User!
    }

    enum Nationality {
        PORTUGAL
        BRAZIL
        RWANDA
        KENYA
        JAMAICA
    }
`;

module.exports = { typeDefs };