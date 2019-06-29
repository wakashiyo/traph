import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "../resolvers/index";

const typeDefs = importSchema("src/schema/schema.graphql");

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
