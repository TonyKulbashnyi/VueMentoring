<template>
  <div class="container">
    <Head @searchMovies="searchMovies" :home="isHomePage" />
    <ControlPanel
      :count="moviesListCount"
      @sortMovies="sortMovies"
      :home="isHomePage"
    />
    <Results :movies="moviesList" />
    <Footer />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import Results from "@/components/Results.vue";
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Head,
    ControlPanel,
    Results,
    Footer,
  },
  data: function() {
    return {
      isHomePage: true,
      filteredMovies: [],
    };
  },
  methods: {
    filterItems(value, query) {
      if (query === "title") {
        return this.movies.filter(function(movie) {
          return movie[query].toLowerCase().indexOf(value.toLowerCase()) !== -1;
        });
      } else {
        return this.movies.filter(function(movie) {
          return movie[query].some((item) => {
            return item.toLowerCase().indexOf(value.toLowerCase()) !== -1;
          });
        });
      }
    },

    sortMovies(query) {
      query !== "rating" ? (query = "releaseDate") : "";
      this.moviesList.sort(function(a, b) {
        if (a[query] < b[query]) {
          return 1;
        } else if (a[query] > b[query]) {
          return -1;
        }
        return 0;
      });
    },

    searchMovies() {
      if (this.searchField === "") {
        this.filteredMovies = [];
      } else {
        this.filteredMovies = this.filterItems(
          this.searchField,
          this.searchOption
        );
      }
    },
  },
  computed: {
    ...mapState(["movies", "searchField", "searchOption", "sortOption"]),
    ...mapGetters(["moviesCount"]),

    moviesList() {
      if (this.filteredMovies.length) {
        return this.filteredMovies;
      } else {
        return this.movies;
      }
    },

    moviesListCount() {
      if (this.filteredMovies.length) {
        return this.filteredMovies.length;
      } else {
        return this.moviesCount;
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
