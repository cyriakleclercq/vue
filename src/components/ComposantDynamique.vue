<template>
  <div>
    <button v-for="element in tableau" :key="element" @click="page = element">
      {{ element.name }}
    </button>

    <keep-alive>
      <component :is="page" />
    </keep-alive>
  </div>
</template>

<script>
import Page1 from "./children/Page1";
import Page2 from "./children/Page2";
import Page3 from "./children/Page3";

export default {
  name: "ComposantDynamique",
  data() {
    return {
      tableau: [Page1, Page2, Page3],
      page: Page1,
    };
  },
};
</script>

<style></style>
