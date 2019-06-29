import { movie, movies } from "./movies";
//import { resolverMap } from "./movies";

export const resolvers = {
  // resolverMap,
  Query: {
    movie,
    movies,
  },
};
