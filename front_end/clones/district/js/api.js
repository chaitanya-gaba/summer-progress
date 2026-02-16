import { movies } from "./data.js";

export function fetchMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies);
    }, 800); // simulate loading
  });
}

export function fetchMovieById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies.find(m => m.id == id));
    }, 500);
  });
}