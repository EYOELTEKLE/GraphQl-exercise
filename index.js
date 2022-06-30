const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema/type-defs')
const {resolvers} = require('./schema/resolvers')

const server = new ApolloServer({typeDefs, resolvers});
//typeDefs - defines the type
//resolvers - defines the functions

server.listen().then(({url}) => console.log("Api is Running at " + url))