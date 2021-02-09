import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/core/api";

Vue.use(Vuex);

// import moviesList from "@/assets/movies.json";

export default new Vuex.Store({
  state: {
    movies: [],
    searchField: null,
    searchOption: "title",
    sortOption: "date",
  },
  getters: {
    moviesCount: (state) => {
      return state.movies.length;
    },

    movies: (state) => {
      return state.movies;
    },

    currentMovie: (state) => (id) => {
      return state.movies.find((movie) => movie.id === id);
    },

    moviesByGenre: (state) => (currentGenre) => {
      let arr = [];
      state.movies.forEach(function(x) {
        if (x.genres.includes(currentGenre)) {
          arr.push(x);
        }
      });

      return arr;
    },
  },
  mutations: {
    UPDATE_SEARCH_FIELD(state, value) {
      state.searchField = value;
    },
    UPDATE_SEARCH_OPTION(state, value) {
      state.searchOption = value;
    },
    UPDATE_SORT_OPTION(state, value) {
      state.sortOption = value;
    },
    POPULATE_MOVIES(state, value) {
      state.movies = value;
    },
  },
  actions: {
    LOAD_USERS({ commit }) {
      return ApiService.getMovies().then((movies) =>
        commit("POPULATE_MOVIES", movies.data)
      );
    },
  },
});
