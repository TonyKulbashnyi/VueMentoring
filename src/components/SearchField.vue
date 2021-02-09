<template>
  <input
    @input="updateSearchField"
    class="search__field"
    v-model="inputValue"
  />
</template>

<script>
export default {
  name: "SearchField",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    updateSearchField() {
      this.$emit("updateSearch", this.inputValue);
    },
  },
};
</script>

<style scoped lang="scss">
.search__field {
  border: 0;
  border-radius: 3px;
  background: rgba(66, 66, 66, 0.8);
  color: white;
  padding: 20px;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: white;
  }
}
</style>
