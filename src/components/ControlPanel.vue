<template>
  <section class="control">
    <div class="contol__info">
      <span class="control__info_count">{{ count }}</span>
      <span class="control__info_val">{{ info }}</span>
    </div>
    <Switcher :title="title" :options="options" />
  </section>
</template>

<script>
import Switcher from "./Switcher.vue";

export default {
  name: "Control",
  components: { Switcher },
  props: {
    count: Number,
    title: String,
    options: Array
  },
  data: function() {
    return {
      info: "movies found"
    };
  }
};
</script>

<style scoped lang="scss">
.control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #555;
  padding: 15px;
  overflow: hidden;
  margin: 0 auto;
  color: white;

  &__info {
    &_count {
      display: inline-block;
      padding-right: 5px;
    }
  }
}
</style>
