<template>
  <article class="details">
    <img class="details__img" :src="getImgUrl(movieItem.poster)" />
    <div class="details__wrap">
      <div class="details__title">
        {{ movieItem.title }}
        <div class="details__rating">
          {{ movieRating }}
        </div>
      </div>
      <div class="details__genre">
        {{ genreList }}
      </div>
      <div class="details__release-wrap">
        <span class="details__release">
          {{ movieItem.releaseDate }} <span>year</span>
        </span>
        <span class="details__duration">
          {{ movieItem.duration }} <span>min</span></span
        >
      </div>
      <div class="details__desc">
        {{ movieItem.description }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "MovieDetails",
  components: {},
  props: {
    movieItem: { type: Object, required: true },
  },
  data: function() {
    return {};
  },

  computed: {
    genreList() {
      return this.movieItem.genre.join(" & ");
    },
    movieRating() {
      return parseFloat(this.movieItem.rating).toFixed(1);
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/posters/" + pic);
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.details {
  display: flex;
  color: #fff;
  padding: 30px 0 60px;

  &__img {
    width: 250px;
    max-height: 400px;
  }

  &__wrap {
    margin: 30px 40px;
  }

  &__title {
    font-size: 46px;
    line-height: 62px;
    margin-bottom: 10px;
  }

  &__rating {
    display: inline-block;
    vertical-align: top;
    border: 1px solid #fff;
    border-radius: 50%;
    font-size: 22px;
    color: #a1e66f;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }

  &__release-wrap {
    font-size: 24px;
    color: #f65261;
    padding: 30px 0;
  }

  &__release {
    margin-right: 40px;
  }

  &__release span,
  &__duration span {
    font-size: 14px;
    color: #999;
  }

  &__desc {
    color: #999;
  }
}
</style>
