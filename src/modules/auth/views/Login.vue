<template>
  <div class="" id="login">
      <Saludo msg="HOLAA"/>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import Saludo from "@/modules/auth/components/Saludo.vue";
import { AuthService } from '@/services/auth';

@Component({
  components: {
    Saludo
  }
})
export default class Login extends Vue {
  @Inject()
  authService!: AuthService
}
</script>

<style>

</style>