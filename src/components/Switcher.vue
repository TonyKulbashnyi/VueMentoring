<template>
  <div class="switcher">
    <div class="switcher__title">
      {{ title }}
    </div>
    <div class="switcher__tabs">
      <div
        v-for="(option, id) in options"
        class="switcher__tab"
        :key="id"
        :class="{ switcher__tab_active: option.checked }"
        @click="makeActive(id)"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Switcher",
  props: {
    title: String,
    options: Array,
  },
  data() {
    return {
      choosedFilterOption: "title",
      choosedSortingOption: "date",
    };
  },
  methods: {
    getChoosenFilterOption() {
      this.$emit("getSearchOption", this.choosedFilterOption);
    },

    getChoosenSortingOption() {
      this.$emit("sortMovies", this.choosedSortingOption);
    },

    makeActive(index) {
      this.options.forEach((item) => {
        item.checked === true ? (item.checked = false) : "";
      });
      this.options[index].checked = true;
      let title = this.options[index].title;
      if (title === "title" || title === "genre") {
        this.choosedFilterOption = this.options[index].title;
        this.getChoosenFilterOption();
      } else {
        this.choosedSortingOption = this.options[index].title;
        this.getChoosenSortingOption();
      }
    },
  },
  created() {
    this.getChoosenFilterOption();
    this.getChoosenSortingOption();
  },
};
</script>

<style scoped lang="scss">
.switcher {
  &__title {
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
  }

  &__tabs {
    display: inline-flex;
    margin-left: 20px;
    background: rgba(66, 66, 66, 0.8);
    border: 0;
    border-radius: 3px;
    font-weight: 400;
  }

  &__tab {
    border: 0;
    border-radius: 3px 0 0 3px;
    padding: 8px 20px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;

    &_active {
      background: #f65261;
    }
  }
}
</style>
