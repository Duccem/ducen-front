<template>
  <div id="app">
    <ServiceProvider>
      <b-dropdown variant="primary" :text="$t('common.lenguage.label')" id="lang">
        <b-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" @click="changeLocale(lang)">
          {{ lang }}
        </b-dropdown-item>
      </b-dropdown>
      <router-view />
    </ServiceProvider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ServiceProvider from '@/services/ServiceProvider.vue';

@Component({
  name:'App',
  components:{
    ServiceProvider
  }
})
export default class App extends Vue{
  langs = ["en", "es", "fr", "pt", "de"];

  public changeLocale(lang: string){
    this.$root.$i18n.locale = lang;
  }
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
