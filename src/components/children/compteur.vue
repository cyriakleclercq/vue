<template>
  <div>
    <h3>{{ text }}</h3>
    <button @click="counter">incrémenter</button>
    <p>{{ count }}</p>
    <div v-if="personne">
      <p>nom : {{ personne.nom }}</p>
      <p>prenom : {{ personne.prenom }}</p>
      <p>age : {{ personne.age }}</p>
    </div>

    <slot name="text" />
    <slot name="noText" />
  </div>
</template>

<script>
export default {
  name: "Children",
  props: { text: String, count: Number, personne: Object },
  data() {
    return {};
  },

  methods: {
    counter() {
      this.count++;
    },
  },
};
</script>

<style></style>
