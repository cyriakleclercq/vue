<template>
  <div>
    <button v-if="checkButton" @click="deleteTaskButton">supprimer</button>
    <button v-else-if="permute" @click="permuteTaskButton">{{ html }}</button>
    <button v-else @click="updateTaskButton">modifier</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    task: Object,
    checkButton: Boolean,
    permute: Boolean,
    html: String,
  },
  methods: {
    deleteTaskButton() {
      this.$emit("deleteTaskButton", this.task);
    },
    updateTaskButton() {
      this.$emit("updateTaskButton", this.task);
    },
    permuteTaskButton() {
      this.$emit("permuteTaskButton", this.task);
    },
  },
};
</script>

<style></style>
