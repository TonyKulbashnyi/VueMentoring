<template>
  <footer class="footer">
    <div class="footer__content">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" class="header__logo" />
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.footer {
  background: #424242;
  padding: 15px;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;

  &__content {
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
}
</style>
