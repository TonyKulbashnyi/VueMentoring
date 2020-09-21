<template>
  <div class="container">
    <Head @searchMovies="searchMovies" :home="isHomePage" />
    <ControlPanel @sortMovies="sortMovies" :count="count" :home="isHomePage" />
    <Results :movies="movies" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/Head.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import Results from "@/components/Results.vue";
import Footer from "@/components/Footer.vue";
import moviesData from "@/assets/movies.json";

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
      movies: moviesData,
      isHomePage: true,
    };
  },
  methods: {
    filterItems(value, query) {
      if (query === "title") {
        return moviesData.filter(function(movie) {
          return movie[query].toLowerCase().indexOf(value.toLowerCase()) !== -1;
        });
      } else {
        return moviesData.filter(function(movie) {
          return movie[query].some((item) => {
            return item.toLowerCase().indexOf(value.toLowerCase()) !== -1;
          });
        });
      }
    },

    searchMovies(value, query) {
      var self = this;
      if (value === "") {
        self.movies = moviesData;
      } else {
        self.movies = this.filterItems(value, query);
      }
    },

    sortMovies(query) {
      query !== "rating" ? (query = "releaseDate") : "";
      this.movies.sort(function(a, b) {
        if (a[query] < b[query]) {
          return 1;
        } else if (a[query] > b[query]) {
          return -1;
        }
        return 0;
      });
    },
  },
  computed: {
    count() {
      return this.movies.length;
    },
  },
};
</script>

<style scoped lang="scss"></style>
