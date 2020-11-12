<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { AuthService } from "./modules/Auth/Services/auth";
import axios from "axios";
@Component({ name: "App" })
export default class App extends Vue {
  authService: AuthService = new AuthService(axios);
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#lang {
  max-width: 80px;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
