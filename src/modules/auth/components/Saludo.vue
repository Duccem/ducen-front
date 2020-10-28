<template>
    <router-link to="/sign-up">
        <h1>{{ msg }}</h1>
    </router-link> 
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Login extends Vue {
    @Prop() private msg!: string;
}
</script>

<style>

</style>
