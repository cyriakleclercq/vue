<template>
  <div>
    <Ajout @newtask="add" />
    <Affichage :tasks="tasks" @deleteTaskAffichage="deleteTask" />
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
    };
  },
  methods: {
    add(task) {
      this.tasks.push({ id: Date.now(), task: task, state: false });
    },

    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id != task.id);
    },
  },
  provide() {
    return {
      message: "message en provide",
    };
  },
};
</script>

<style></style>
