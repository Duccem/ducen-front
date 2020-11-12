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
          <b-button to="/home" type="submit" variant="primary">{{ $t('login.title.label') }}</b-button>
          <b-button style="margin-left:10px;" variant="success">{{ $t('signup.title.label') }}</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script lang="ts">
// Vue
import { Component, Inject, Vue } from "vue-property-decorator";

// Components
import Saludo from "@/modules/shared/Components/Saludo.vue";

// Services
import { AuthService } from "@/modules/Auth/Services/auth";

// Domain
import { User, UserJson } from "@/modules/Auth/Models/User";


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
    const { message, data } = await this.authService.login(this.user, this.password);

    if(message === "Ok"){
      const user = new User(data as UserJson);
      localStorage.setItem('user', JSON.stringify(user.toPrimitives()))
      localStorage.setItem('token', user.toPrimitives().access_token)
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