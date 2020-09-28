import { intersection } from "@/directives/directives";

export function install(Vue) {
  Vue.directive("isInViewPort", intersection);
}
