<template>
  <v-app>
    <v-app-bar app dark>
      <h2>TweetBot</h2>
      <v-spacer></v-spacer>
      <v-btn text>login</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
