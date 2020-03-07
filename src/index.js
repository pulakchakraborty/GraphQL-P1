const { GraphQLServer } = require('graphql-yoga')

// define GraphQL schema
const typeDefs = `
type Query {
  info: String!
}
`

// implementation of GraphQL schema
const resolvers = {
  Query: {
    info: () => `unimportant info`
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
