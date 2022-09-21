<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TestApi from '../api/text'
export default {
  name: 'HomeView',
  data() {
    return {
      page: 1,
      size: 10
    }
  },
  components: {
    HelloWorld
  },
  created() {
    TestApi.getMemberList(this.page, this.size)
      .then(response => {
        console.log('member=>', response)
      })
      .catch(error => {
        console.log(error)
      })

    // TestApi.getMemberList(this.text).then(re => {
    //   console.log(res, 'res1')
    // })

    TestApi.getSupplierList(this.page, this.size)
      .then(response => {
        console.log('supplier=>', response)
      })
      .catch(error => {
        console.log(error)
      })

    // TestApi.getNewList()
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // request({
    //   url: process.env.VUE_APP_BASE_API + '/',
    //   method: 'GET'
    // })
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // request({
    //   url: process.env.VUE_APP_BASE_API1 + '/',
    //   method: 'GET'
    // })
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}
</script>
