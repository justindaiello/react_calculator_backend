const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation: Mutation,
      Query: Query  
    },
    //small fix for errors
    resolverValidationOptions: {
      requireResolversForResolveType: false    
    },
    context: req => ({ ...req, db })
  })
}

module.exports = createServer;