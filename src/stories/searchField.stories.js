import SearchField from "../components/SearchField.vue";

export default {
  component: SearchField,
  title: "SearchField"
};

export const withPlaceholderAndValue = () => ({
  components: { SearchField },
  template: '<SearchField :value="value" :placeholder="placeholder" />',
  props: {
    value: {
      default: () => ""
    },
    placeholder: {
      default: () => "Placeholder"
    }
  }
});
