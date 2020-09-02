import { action } from "@storybook/addon-actions";
import SearchButton from "../components/SearchButton.vue";

export default {
  component: SearchButton,
  title: "SearchButton"
};

export const withText = () => ({
  components: { SearchButton },
  template: '<SearchButton @click="action">Hello Button</SearchButton>',
  methods: { action: action("clicked") }
});
