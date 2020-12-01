<template>
  <div>
    <h2>tâches à faire</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div v-if="!task.state">
          <p v-if="taskToEdit == task">
            <input type="text" v-model="task.task" @keydown.enter="save" />
          </p>

          <p v-else>{{ task.task }}</p>
          <Button
            :task="task"
            :checkButton="true"
            @deleteTaskButton="deleteTaskAffichage"
          />
          <Button
            :task="task"
            :checkButton="false"
            @updateTaskButton="updateTaskAffichage"
          />
          <Button
            :task="task"
            :permute="true"
            html="v"
            @permuteTaskButton="permuteTaskAffichage"
          />
        </div>
      </li>
    </ul>

    <h2>tâches faites</h2>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div v-if="task.state">
          {{ task.task }}

          <Button
            :task="task"
            :permute="true"
            html="x"
            @permuteTaskButton="permuteTaskAffichage"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Affichage",
  components: {
    Button,
  },
  props: {
    tasks: Array,
  },
  data() {
    return {
      taskToEdit: null,
    };
  },
  methods: {
    deleteTaskAffichage(task) {
      this.$emit("deleteTaskAffichage", task);
    },
    updateTaskAffichage(task) {
      this.taskToEdit = task;
    },

    save() {
      this.taskToEdit = null;
    },

    permuteTaskAffichage(task) {
      task.state === false ? (task.state = true) : (task.state = false);
    },
  },
};
</script>

<style></style>
