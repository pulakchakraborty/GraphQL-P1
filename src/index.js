const { GraphQLServer } = require('graphql-yoga')

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

// generate unique id for newly created `link`elements
let idCount = links.length

// Resolver function: implementation of GraphQL schema
const resolvers = {
  Query: {
    info: () => `some query info`,
    feed: () => links,
  },
  Mutation: {
    // create a new `link` object, adds it to the existing `links` list, and returns the new `link`
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  },
  // remove the link resolvers entirely
  /*
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
  */
}

// implement the server
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
