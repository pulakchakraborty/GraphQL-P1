const { GraphQLServer } = require('graphql-yoga')

// define GraphQL schema
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`
// add dummy data
let links = [{
  id: 'link-0',
  url: 'urlno1',
  description: 'Fullstack tutorial for GraphQL'
},
{
id: 'link-1',
url: 'urlno2',
description: 'Fullstack tutorial for GraphQL'
}]

// Resolver function: implementation of GraphQL schema
const resolvers = {
  Query: {
    info: () => `some query info`,
    // 2
    feed: () => links,
  },
  // 3
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

// implement the server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
