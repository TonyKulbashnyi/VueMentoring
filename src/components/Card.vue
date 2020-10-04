<template>
  <div class="card" @click="scrollToTop">
    <router-link
      :to="{
        name: 'movie',
        params: { id: movie.id },
      }"
    >
      <!-- <img
        class="card__img"
        :src="urlPath"
        v-isInViewPort="getImg(movie.poster)"
        @intersects="addUrlPath($event)"
      /> -->
      <img
        class="card__img"
        :src="urlPath"
        v-isInViewPort="movie.poster_path"
        @intersects="addUrlPath($event)"
      />
    </router-link>
    <div class="card__details">
      <div class="card__title">
        {{ movie.title }}
      </div>
      <div class="card__year">
        {{ movie.release_date | toYear() }}
      </div>
      <div class="card__genre">
        {{ genres }}
      </div>
    </div>
  </div>
</template>

<script>
import { toYear } from "@/filters/to-year";

export default {
  name: "Card",
  components: {},
  props: {
    movie: { type: Object, required: true },
  },
  data() {
    return {
      urlPath: "",
    };
  },
  filters: {
    toYear,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    addUrlPath(event) {
      this.urlPath = event.detail;
    },
  },
  computed: {
    genres() {
      let movie = this.$props.movie;
      return movie.genres.join(" & ");
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
