import Switcher from "../components/Switcher.vue";

export default {
  component: Switcher,
  title: "Switcher"
};

const optionItems = [
  {
    id: 0,
    title: "title",
    checked: true
  },
  {
    id: 1,
    title: "gengre",
    checked: false
  }
];

export const withOptions = () => ({
  components: { Switcher },
  template: '<Switcher :title="title" :options="options" />',
  props: {
    title: {
      default: () => "Search By"
    },
    options: {
      default: () => optionItems
    }
  }
});
