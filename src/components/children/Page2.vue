<template>
  <div>
    <h2>Page 2</h2>

    <p>{{ count }}</p>

    <button @click="count += 1">incrémenter</button>
  </div>
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
