<template>
  <section class="control">
    <div v-if="isHome" class="wrapper control__wrapper">
      <div class="contol__info">
        {{ countString }}
      </div>
      <Switcher v-on="$listeners" :title="title" :options="options" />
    </div>
    <div v-if="isMovie" class="wrapper control__wrapper">
      <div class="contol__info control__info_bold">
        {{ getGenreList }}
      </div>
    </div>
  </section>
</template>

<script>
import Switcher from "./Switcher.vue";

export default {
  name: "Control",
  components: { Switcher },
  props: {
    count: Number,
    home: Boolean,
    movie: Boolean,
    movieItem: Object,
  },
  data: function() {
    return {
      info: "movies found",
      title: "sort by",
      genreListStart: "Films by ",
      genreListEnd: " genre",
      options: [
        {
          id: 0,
          title: "release date",
          checked: true,
        },
        {
          id: 1,
          title: "rating",
          checked: false,
        },
      ],
    };
  },
  methods: {},
  computed: {
    countString() {
      let length = this.count;
      if (length === 0) return "";
      return `${length} movie${length > 1 ? "s" : ""} found`;
    },

    isHome() {
      return this.home;
    },

    isMovie() {
      return this.movie;
    },
    getGenreList() {
      return this.genreListStart + this.movieItem.genres[0] + this.genreListEnd;
    },
  },
};
</script>

<style scoped lang="scss">
.control {
  background: #555;
  padding: 15px;
  overflow: hidden;
  margin: 0 auto;
  color: white;

  &__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    &_count {
      display: inline-block;
      padding-right: 5px;
    }

    &_bold {
      font-weight: 500;
    }
  }
}
</style>
