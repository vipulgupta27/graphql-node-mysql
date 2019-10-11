import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import db from "./models";
const port = 3000;
const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("public"));
app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
