<template>
  <div id="main">
    <h1>Page Users</h1>

    <Affichage :data="users" />

    <Formulaire @refresh="fetchUsers" />
  </div>
</template>

<script>
import UsersService from "./services/UsersService";
import Affichage from "./components/affichage";
import Formulaire from "./layouts/formulaire";

export default {
  name: "Utilisateurs",
  components: {
    Affichage,
    Formulaire,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      console.log("check");
      return UsersService.getUsers().then((users) => {
        this.users = users;
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
#main {
  text-align: center;
}
</style>
