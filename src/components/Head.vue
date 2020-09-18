<template>
  <section class="head">
    <div class="wrapper">
      <Header :search="isMovie" />
      <Find v-if="isHome" v-on="$listeners" />
      <MovieDetails v-if="isMovie" :movieItem="thisMovie" />
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Find from "@/components/Find.vue";
import MovieDetails from "@/components/MovieDetails.vue";

export default {
  name: "Head",
  props: {
    home: Boolean,
    movie: Boolean,
    movieItem: Object,
  },
  components: {
    Header,
    Find,
    MovieDetails,
  },
  data() {
    return {};
  },
  computed: {
    isHome() {
      return this.home;
    },

    isMovie() {
      return this.movie;
    },

    thisMovie() {
      return this.movieItem;
    },
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.head {
  text-align: left;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../assets/posters_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
}
</style>
