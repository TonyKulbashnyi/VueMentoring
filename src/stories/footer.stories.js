import Footer from "../components/Footer.vue";

export default {
  component: Footer,
  title: "Footer"
};

export const withText = () => ({
  components: { Footer },
  template: "<Footer>Some text or img should be here</Footer>"
});
