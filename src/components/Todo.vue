<template>
  <div class="listStyle">
    {{ titre }}

    <div>
      <h2>tâches à faire</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div v-if="!task.state">
            <p v-if="check && taskToEdit.id == task.id">
              <input type="text" v-model="task.task" @keydown.enter="save" />
            </p>

            <p v-else>{{ task.task }}</p>

            <button @click="deleteTodo(task)">supprimer</button>
            <button @click="updateTodo(task)">modifier</button>
            <button @click="permute(task)">v</button>
          </div>
        </li>
      </ul>

      <h2>tâches faites</h2>

      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div v-if="task.state">
            {{ task.task }} <button @click="permute(task)">x</button>
          </div>
        </li>
      </ul>
    </div>

    <input type="text" v-model="task" @keydown.enter="addTodo" />
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      titre: "TodoList",
      task: null,
      tasks: [],
      check: false,
      taskToEdit: null,
    };
  },
  methods: {
    addTodo() {
      if (this.task != null) {
        this.tasks.push({ id: Date.now(), task: this.task, state: false });
        this.task = "";
      }
    },

    deleteTodo(task) {
      this.tasks = this.tasks.filter((t) => t.id != task.id);
    },

    updateTodo(task) {
      this.check = true;
      this.taskToEdit = task;
    },

    save() {
      this.taskToEdit = null;
      this.check = false;
    },

    permute(task) {
      task.state === false ? (task.state = true) : (task.state = false);
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
