import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "../resolvers/index";
// import { resolver } from "../resolvers/movies";
// import { resolverMap } from "../resolvers/movies";

const typeDefs = importSchema("src/schema/schema.graphql");

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
