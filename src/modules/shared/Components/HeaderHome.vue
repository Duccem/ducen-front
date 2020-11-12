<template>
  <div id="bar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-nav-form style="margin-left:300px">
        <b-form-input
          size="md"
          class="mr-sm-2"
          placeholder="Search"
           style="width:600px"
        ></b-form-input>
      </b-nav-form>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown :text="$t('common.lenguage.label')" right>
          <b-dropdown-item
            v-for="(lang, i) in langs"
            :key="`Lang${i}`"
            @click="changeLocale(lang)"
          >
            {{ lang }}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "LateralBar" })
export default class HeaderHome extends Vue {
  langs = ["en", "es", "fr", "pt", "de"];

  public changeLocale(lang: string) {
    this.$root.$i18n.locale = lang;
  }
}
</script>

<style></style>
