<template>
  <div id="bar">
      <h2 class="text-center">My App</h2>
      <b-nav id="nav-1" title="Menu" vertical shadow>
          <b-nav-item v-for="(menu,i) in menus" :key="i" :active="menu.active" > {{ menu.name }} </b-nav-item>
      </b-nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({name:"LateralBar"})
export default class LateralBar extends Vue{
    public menus = [
        { name: this.$t('common.lateralBar.home.label'), roles: ['ALL'], active:true },
        { name: this.$t('common.lateralBar.myTravels.label'), roles: ['DRIVER', 'TRAVELER', 'ADMIN'], active:false },
        { name: this.$t('common.lateralBar.myWallet.label'), roles: ['View:Wallet'], active:false }
    ]
}
</script>

<style>

</style>