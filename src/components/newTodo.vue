<template>
  <div>
    <Ajout @newtask="add" />
    <Affichage :tasks="tasks" @deleteTaskAffichage="deleteTask" />

    <div>
      {{ count }}
      <button @click="incCount">incrémente</button>
    </div>
  </div>
</template>

<script>
import Ajout from "./todoComponents/Ajout";
import Affichage from "./todoComponents/Affichage";
export default {
  name: "NewTodo",
  components: {
    Ajout,
    Affichage,
  },
  data() {
    return {
      tasks: [],
      count: 0,
    };
  },
  methods: {
    add(task) {
      this.tasks.push({ id: Date.now(), task: task, state: false });
    },

    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id != task.id);
    },

    incCount() {
      this.$store.commit("increment");
      this.count = this.$store.state.monStore.count;
    },
  },
  provide() {
    return {
      message: "message en provide",
    };
  },
  created() {
    this.count = this.$store.state.monStore.count;
  },
};
</script>

<style></style>
