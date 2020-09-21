<template>
  <div class="container">
    <Head :movie="isMoviePage" :movieItem="currentMovie" />
    <ControlPanel :movie="isMoviePage" :movieItem="currentMovie" />
    <Results :movies="moviesByGenre" />
    <Footer />
  </div>
</template>
<script>
import Head from "@/components/Head.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import Results from "@/components/Results.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";

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
    };
  },
  computed: {
    ...mapState(["movies"]),

    movieId() {
      return this.$route.params.id;
    },

    currentMovie() {
      return this.$store.getters.currentMovie(this.movieId);
    },

    currentGenre() {
      return this.currentMovie.genre[0];
    },

    moviesByGenre() {
      return this.$store.getters.moviesByGenre(this.currentGenre);
    },
  },
};
</script>

<style scoped lang="scss"></style>
