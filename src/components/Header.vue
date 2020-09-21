<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/logo.png" alt="logo" class="header__logo" />
    </router-link>
    <template v-if="search">
      <router-link to="/">
        <img
          src="../assets/search_icon.png"
          alt="search"
          class="header__search"
        />
      </router-link>
    </template>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    search: Boolean,
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;

  &__search {
    height: 30px;
  }
}
</style>
