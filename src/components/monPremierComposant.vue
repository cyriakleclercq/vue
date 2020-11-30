<template>
  <div>
    <p :title="message1">{{ message }}</p>

    <div>
      <p v-if="check">la variable check est vraie</p>
      <p v-else>la variable check est fausse</p>
    </div>

    <ul>
      <li v-for="ville in tableau" :key="ville">
        {{ ville }}
      </li>
    </ul>

    <ul>
      <li v-for="ville in tableau2" :key="ville.ville">
        la ville : {{ ville.ville }} se situe dans le pays : {{ ville.pays }}
      </li>
    </ul>

    <div>
      <p>nombre de fois cliqué : {{ clicked }}</p>

      <button @click="Inc">clique</button>
    </div>

    <div>
      <input type="text" v-model.number="text" />

      <p>{{ text }}</p>
    </div>

    <div v-html="couleur" />

    <a :href="url"> clique </a>

    <p v-show="check">Check de v-show</p>
    <p v-if="check">Check de v-if</p>

    <div>
      <button @click="say('hello')">click</button>
    </div>

    <div>
      <select name="" id="" v-model="num" multiple>
        <option value=""> Choisir</option>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonPremierComposant",
  data() {
    return {
      message: "Ceci est mon premier message",
      message1: "titre du message",
      check: false,
      tableau: ["Tokyo", "Lille", "Madrid", "Nice"],
      tableau2: [
        { ville: "Tokyo", pays: "Japon" },
        { ville: "Lille", pays: "France" },
        { ville: "Madrid", pays: "Espagne" },
        { ville: "Nice", pays: "France" },
      ],
      clicked: 0,
      text: "Texte par défaut",
      couleur: `<span style="color:red"> Mon message est rouge </span>`,
      url: "https://www.google.fr/",
      num: [],
    };
  },
  methods: {
    Inc() {
      this.clicked++;
      console.log(this.text);
    },

    say(param) {
      alert(`${param} à tous`);
    },
  },
  mounted() {
    console.log("le composant est en train de se monter");
  },
};
</script>

<style scoped></style>
