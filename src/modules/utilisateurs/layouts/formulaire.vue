<template>
  <div>
    <form action="" id="formulaire" @submit.prevent="save">
      <div class="input">
        <label for="name"> prénom : </label>
        <input type="text" v-model.trim="$v.prenom.$model" name="" id="name" />
      </div>

      <div class="input">
        <label for="surname"> nom : </label>
        <input type="text" v-model.trim="$v.nom.$model" name="" id="surname" />
      </div>

      <div class="input">
        <label for="age"> age : </label>
        <input type="number" v-model.trim="$v.age.$model" name="" id="age" />
      </div>
      <v-btn type="submit" elevation="2">valider</v-btn>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import UsersService from "../services/UsersService";
import UsersModel from "../models/UsersModel";
export default {
  name: "Formulaire",
  data: () => {
    return {};
  },
  validations: {
    prenom: { required },
    nom: { required },
    age: { required },
  },
  methods: {
    save() {
      this.$v.$touch();

      console.log(this.$v);
      if (this.$v.$invalid) {
        alert("error");
      } else {
        this.addUser();
        this.$v.$reset();
        this.$emit("refresh");
      }
    },

    addUser() {
      UsersService.addUser(new UsersModel(this.nom, this.prenom, this.age));
    },
  },
};
</script>

<style></style>
