<template>
  <button class="search__button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SearchButton",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  &__button {
    border: 1px solid #f65261;
    border-radius: 3px;
    background-color: #f65261;
    color: white;
    cursor: pointer;
    font-size: 1.125rem;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 500;
    outline: none;
  }
}
</style>
