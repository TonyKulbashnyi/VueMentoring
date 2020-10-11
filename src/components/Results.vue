<template>
  <section class="results">
    <div v-if="movies.length" class="wrapper results__wrapper">
      <Card
        v-for="movie in movies"
        :key="$router.params + movie.id"
        :movie="movie"
      />
    </div>
    <template v-else>
      <div class="results__empty">
        No film found
      </div>
    </template>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Head",
  components: { Card },
  props: {
    movies: Array,
  },
  data() {
    return {
      i: 0,
    };
  },
};
</script>
<style scoped lang="scss">
.results {
  background: #232323;
  overflow: hidden;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
    padding: 50px 0;
  }

  &__empty {
    text-align: center;
    color: #fff;
    opacity: 0.8;
    text-align: center;
    font-size: 3rem;
    min-height: 550px;
    line-height: 500px;
  }
}
</style>
