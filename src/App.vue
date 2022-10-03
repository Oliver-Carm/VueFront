<template>
<router-view></router-view>
</template>

<script>
import  Login from './components/Login'

export default {
  name: 'App',
  components: {
   // eslint-disable-next-line vue/no-unused-components
   Login
  }
  
};
</script>
<style scoped>

</style>