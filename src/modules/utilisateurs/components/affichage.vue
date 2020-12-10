<template>
  <div id="main">
    <ul>
      <li v-for="user in data" :key="user.id">
        <v-card max-width="250" class="card">
          <v-card-title>
            {{ user.nom }} {{ user.prenom }}, {{ user.age }} ans
          </v-card-title>

          <v-card-text> Utilisateur enregistré le {{ user.date }} </v-card-text>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Affichage",
  props: {
    data: Array,
  },
};
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card {
  margin-bottom: 25px;
}
</style>
