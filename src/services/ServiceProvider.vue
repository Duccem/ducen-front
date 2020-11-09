<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import axios from 'axios'
import {AuthService} from '@/services/rest/auth'
@Component({ name: 'ServiceProvider' })
export default class ServiceProvider extends Vue {
    @Provide()
    authService: AuthService = new AuthService(axios);
}
</script>
