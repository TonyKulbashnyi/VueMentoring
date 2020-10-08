<template>
  <div class="container">
    <div class="not-found">
      Not Found
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "NotFound",
  components: { Footer },
  data: function() {
    return {};
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.not-found {
  width: 100vw;
  height: calc(100vh - 61px);
  background: #232323;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
</style>
