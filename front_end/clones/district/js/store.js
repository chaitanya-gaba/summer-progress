export const store = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  cart: [],
  selectedSeats: [],
  currentMovie: null
};

export function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(store.favorites));
}