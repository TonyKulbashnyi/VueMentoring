import Control from "../components/ControlPanel.vue";

export default {
  component: Control,
  title: "Control"
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

export const withTextAndSwitcher = () => ({
  components: { Control },
  template: "<Control :title='title' :count='count'  :options='options'/>",
  props: {
    title: {
      default: () => "Search By"
    },
    count: {
      default: () => 5
    },
    options: {
      default: () => optionItems
    }
  }
});
