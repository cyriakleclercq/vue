<template>
  <div>
    <input type="text" v-model="task" @keydown.enter="add" />
  </div>
</template>

<script>
export default {
  name: "Ajout",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    add() {
      if (this.task != null) {
        this.$emit("newtask", this.task);
        this.task = null;
      }
    },
  },
};
</script>

<style></style>
