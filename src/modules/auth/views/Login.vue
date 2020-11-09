<template>
  <div class="" id="login">
    
    <Saludo :msg="$t('login.title.label')" />
    <b-container>
      <b-card>
        <b-form @submit="login">
          <b-form-group id="login-group-1" :label="$t('login.user.label')" label-for="user">
            <b-form-input id="user" v-model="user" :placeholder="$t('login.user.placeholder')" required></b-form-input>
          </b-form-group>
          <b-form-group id="login-group-2" :label="$t('login.password.label')" label-for="password">
            <b-form-input id="password" v-model="password" :placeholder="$t('login.password.placeholder')" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">{{ $t('login.title.label') }}</b-button>
          <b-button style="margin-left:10px;" variant="success">{{ $t('signup.title.label') }}</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import Saludo from "@/modules/auth/components/Saludo.vue";
import { AuthService } from "@/services/rest/auth";

@Component({
  components: {
    Saludo
  }
})
export default class Login extends Vue {
  
  @Inject()
  authService!: AuthService;

  public user = "";
  public password = "";

  public async login(){
    const { message } = await this.authService.login(this.user, this.password);
    if(message === "Ok"){
      this.$router.push('/user');
    }
  }
}
</script>

<style lang="css">
  #login{
    text-align: center;
  }
  #login label{
    text-align: left;
  }
</style>