<template>
  <article class="details">
    <img class="details__img" :src="movieItem.poster_path" />
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
          {{ movieItem.release_date | toYear() }} <span>year</span>
        </span>
        <span class="details__duration">
          <template v-if="movieItem.runtime > 60">
            {{ movieItem.runtime | toHours() }} <span>{{ hourStr }}</span>
          </template>
          {{ movieItem.runtime | toMin() }} <span>min</span>
        </span>
      </div>
      <div class="details__desc">
        {{ movieItem.overview }}
      </div>
    </div>
  </article>
</template>

<script>
import { toHours } from "@/filters/to-hours";
import { toMin } from "@/filters/to-min";
import { toYear } from "@/filters/to-year";

export default {
  name: "MovieDetails",
  components: {},
  props: {
    movieItem: { type: Object, required: true },
  },
  data: function() {
    return {};
  },
  filters: {
    toHours,
    toMin,
    toYear,
  },
  computed: {
    genreList() {
      return this.movieItem.genres.join(" & ");
    },
    movieRating() {
      return parseFloat(this.movieItem.vote_average).toFixed(1);
    },
    hourStr() {
      return toHours(this.movieItem.runtime) > 1 ? "hours" : "hour";
    },
  },
  methods: {},
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
  &__duration span,
  &__duration_min,
  .min {
    font-size: 14px;
    color: #999;
  }

  &__desc {
    color: #999;
  }
}
</style>
