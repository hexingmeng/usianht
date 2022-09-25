<template>
  <div id="appMain">
    <AppLink v-if="controllLink"></AppLink>
    
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from "./Link.vue";
export default {
  components: {
    AppLink,
  },
  computed: {
    controllLink() {
      return !(this.$route.path === "/index");
    },
  },
};
</script>