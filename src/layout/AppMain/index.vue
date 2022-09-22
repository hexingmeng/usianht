<template>
  <div>
    <app-link v-if="controllLink"></app-link>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppLink from './Link.vue'
export default {
  name: '',
  components: { AppLink },
  data() {
    return {}
  },
  computed: {
    controllLink() {
      return !(this.$route.path === '/index')
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>
