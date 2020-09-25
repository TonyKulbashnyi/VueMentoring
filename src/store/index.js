import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import moviesList from "@/assets/movies.json";

export default new Vuex.Store({
  state: {
    movies: moviesList,
    searchField: null,
    searchOption: "title",
    sortOption: "date",
  },
  getters: {
    moviesCount: (state) => {
      return state.movies.length;
    },

    currentMovie: (state) => (id) => {
      return state.movies.find((movie) => movie.id === id);
    },

    moviesByGenre: (state) => (currentGenre) => {
      let arr = [];
      state.movies.forEach(function(x) {
        if (x.genre.includes(currentGenre)) {
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
  },
  actions: {},
  modules: {},
});
