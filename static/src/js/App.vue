<script setup lang="ts">
import { inject, onMounted } from "vue";
import {MyService} from "./MyService";

const myService = inject<MyService>("MyService");

onMounted(async () => {
  const todos = await myService?.fetchTodos();
  const posts = await myService?.fetchPosts();
  console.log("todos: ", todos);
  console.log("posts: ", posts);
});
</script>

<template>
<h1>This is the Vue app</h1>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
