<template>
  <div class="" id="login">
      <Saludo :msg="$t('common.greeting.label')"/>
      <select name="" v-model="$root.$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
      </select>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue,  } from "vue-property-decorator";
import Saludo from "@/modules/auth/components/Saludo.vue";
import { AuthService } from '@/services/auth';

@Component({
  components: {
    Saludo
  }
})
export default class Login extends Vue {
  langs = ['en', 'es', 'fr', 'pt', 'de'];
  @Inject()
  authService!: AuthService
}
</script>

<style>

</style>