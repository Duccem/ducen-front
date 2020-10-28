<template>
  <div class="" id="login">
      <Saludo msg="HOLAA"/>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Saludo from "@/modules/auth/components/Saludo";

@Component({
  components: {
    Saludo
  }
})
export default class Login extends Vue {}
</script>

<style>

</style>