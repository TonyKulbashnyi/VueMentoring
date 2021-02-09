<template>
  <div class="find">
    <h2 class="find__title">
      {{ title }}
    </h2>
    <div class="find__search">
      <SearchField @updateSearch="updateSearch" />
      <SearchButton @click="search">Search</SearchButton>
    </div>
    <div class="find__switcher">
      <Switcher :title="switcherTitle" :options="switcherOptions" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SearchField from "@/components/SearchField.vue";
import SearchButton from "@/components/SearchButton.vue";
import Switcher from "@/components/Switcher.vue";

export default {
  name: "Find",
  components: { SearchField, SearchButton, Switcher },
  data: function() {
    return {
      title: "find your movie",
      value: "",
      placeholder: "",
      switcherTitle: "search by",
      choosedOption: "",
      inputValue: "",
      switcherOptions: [
        {
          id: 0,
          title: "title",
          checked: true,
        },
        {
          id: 1,
          title: "genres",
          checked: false,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["UPDATE_SEARCH_FIELD"]),

    updateSearch(value) {
      this.inputValue = value;
    },

    search() {
      this.UPDATE_SEARCH_FIELD(this.inputValue);
      this.$emit("searchMovies");
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.find {
  padding: 0 80px 80px;

  &__title {
    color: white;
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: 300;
  }

  &__search {
    display: grid;
    grid-template-columns: 75% 1fr;
    gap: 20px;
    padding-bottom: 15px;
  }

  &__switcher {
    padding-bottom: 15px;
  }
}
</style>
