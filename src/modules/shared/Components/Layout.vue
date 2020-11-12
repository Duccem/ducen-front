<template>
  <div id="layout">
    <div class="row">
      <lateral-bar id="lateral-bar" class="col-md-2 border border-primary"></lateral-bar>
      <header-home id="header-home" class="col-md-10"></header-home>
    </div>
      
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';

import LateralBar from "@/modules/shared/Components/LateralBar.vue";
import HeaderHome from "@/modules/shared/Components/HeaderHome.vue";

@Component({ name: "Layout", components:{
    LateralBar, HeaderHome
} })
export default class Layout extends Vue{}
</script>

<style scoped>
  #lateral-bar{
    height: 100vh;
  }
</style>