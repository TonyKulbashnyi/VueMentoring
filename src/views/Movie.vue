<template>
  <div class="container">
    <Head :movie="isMoviePage" :movieItem="thisMovie" />
    <ControlPanel :movie="isMoviePage" :movieItem="thisMovie" />
    <Results :movies="moviesByGenre" />
    <Footer />
  </div>
</template>
<script>
import Head from "@/components/Head.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import Results from "@/components/Results.vue";
import Footer from "@/components/Footer.vue";
import moviesData from "@/assets/movies.json";

export default {
  name: "Movie",
  components: {
    Head,
    ControlPanel,
    Results,
    Footer,
  },
  data: function() {
    return {
      isMoviePage: true,
      movies: moviesData,
      thisMovie: null,
      movieId: null,
      moviesByGenre: [],
    };
  },
  methods: {
    getListByGenre() {
      let self = this;
      let currentGenre = this.thisMovie.genre[0];
      this.movies.forEach(function(x) {
        if (x.genre.includes(currentGenre)) {
          self.moviesByGenre.push(x);
        }
      });
    },
    getMovieId() {
      this.movieId = this.$route.params.id;
    },
    getCurrentMovie() {
      this.thisMovie = this.movies.find((x) => x.id === this.movieId);
    },
  },
  computed: {},
  created() {
    this.getMovieId();
    this.getCurrentMovie();
    this.getListByGenre();
  },
  updated() {
    this.getMovieId();
    this.getCurrentMovie();
    this.getListByGenre();
  },
  watch: {
    $route: function() {
      this.getMovieId();
      // TODO: update Movie page when url changed
    },
  },
};
</script>

<style scoped lang="scss"></style>
