import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import moviesList from "@/assets/movies.json";

export default new Vuex.Store({
  state: {
    movies: moviesList,
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
  mutations: {},
  actions: {},
  modules: {},
});
