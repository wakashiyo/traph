import mockMovies from "../mocks/movies.json";

interface Repository<T> {
  fetchMovies(): T[];
  movieWithId(id: number): T;
}

interface Movie {
  id: number;
  director: string;
  title: string;
}

class MovieRepository implements Repository<Movie> {
  fetchMovies() {
    return mockMovies;
  }
  movieWithId(id: number) {
    if (id === 1) {
      return mockMovies[0];
    } else {
      return mockMovies[1];
    }
  }
}

const m = new MovieRepository();

export const movies = () => {
  return m.fetchMovies();
};

export const movie = (root: any, args: { id: number}) => {
  return m.movieWithId(args.id);
};

// export const resolverMap = {
//   Query: {
//     movie: (root: any, args: { id: number }) => { m.movieWithId(args.id); },
//     movies: () => { m.fetchMovies(); },
//   },
// };

// class Resolver<T> {

//   private repository: Repository<T>

//   constructor(_repository: Repository<T>) {
//     this.repository = _repository;
//   };

//   public resolverMap = {
//     Query: {
//       movies: () => { this.repository.fetchMovies() },
//       movie: (root: any, args: { id: number }) => { this.repository.movieWithId(args.id) },
//     }
//   }
// };

// const m = new MovieRepository();

// const resolver = new Resolver<Movie>(m);

//export const resolver = r.resolverMap;
