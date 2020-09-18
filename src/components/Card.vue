<template>
  <div class="card" @click="scrollToTop">
    <router-link
      :to="{
        name: 'movie',
        params: { id: movie.id },
      }"
    >
      <!-- <a class="card__link" :href="movieUrl"> -->
      <img class="card__img" :src="getImg(movie.poster)" />
    </router-link>
    <div class="card__details">
      <div class="card__title">
        {{ movie.title }}
      </div>
      <div class="card__year">
        {{ movie.releaseDate }}
      </div>
      <div class="card__genre">
        {{ genres }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: {
    movie: { type: Object, required: true },
  },
  methods: {
    getImg(img) {
      return require("../assets/posters/" + img);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    genres() {
      let movie = this.$props.movie;
      return movie.genre.join(" & ");
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-flow: column wrap;
  color: #fff !important;
  padding: 10px;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    position: relative;
    transform: scale(1.1);
  }

  &__img {
    width: 100%;
    height: 450px;
  }

  &__details {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    opacity: 0.8;
  }

  &__title {
    width: 70%;
  }

  &__year {
    padding: 3px 10px;
    border: 1px solid #666;
    border-radius: 5px;
  }

  &__genre {
    margin: 8px 0;
    opacity: 0.7;
  }
}
</style>
