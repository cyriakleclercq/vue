<template>
  <div>
    <Children text="Compteur 1" :count="count + 10">
      <template #text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti
        mollitia voluptatum cupiditate sit, fugit velit totam voluptates nostrum
        quasi libero quidem soluta quis modi. Temporibus ex aliquid repellendus
      </template>

      <template #noText>
        <p>Pas de text</p>
      </template>
    </Children>
    <Children text="Compteur 2" :count="count + 15" />
    <Children text="Compteur 3" :count="count + 20" />
    <Children text="Compteur 4" :count="count" :personne="personne" />
  </div>
</template>

<script>
import Children from "./children/compteur";
export default {
  name: "CompteurChildren",
  components: {
    Children,
  },
  data() {
    return {
      count: 10,
      personne: { nom: "Dupont", prenom: "Jean", age: 54 },
    };
  },
};
</script>

<style></style>
