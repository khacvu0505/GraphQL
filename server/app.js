const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");

// Load Schema and Resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load db methods
const mongoDataMethods = require("./data/db");

// Connect to MongoDB
const mongoDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://khacvu0505:01699652356vV@graphql.1bo3xgq.mongodb.net/?retryWrites=true&w=majority"
        // {
        //   useCreateIndex: true,
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        //   useFindAndModify: false,
        // }
      )
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
mongoDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const app = express();

server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
