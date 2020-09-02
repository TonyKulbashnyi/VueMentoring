<template>
  <input class="search__field" :placeholder="placeholder" :value="value" />
</template>

<script>
export default {
  name: "SearchField",
  props: {
    value: String,
    placeholder: String
  }
};
</script>

<style scoped lang="scss">
.search__field {
  border: 0;
  border-radius: 3px;
  background: rgba(66, 66, 66, 0.8);
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 10px 20px;

  &::placeholder {
    color: white;
  }
}
</style>
