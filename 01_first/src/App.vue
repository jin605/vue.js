<template>
  <div>
    <h2>Vue.js 기초</h2>

    <p>{{ message }}</p>

      <Directive></Directive>
  </div>
</template>

<script>
  import Directive from './components/Directive1.vue';

  export default {
    name: "App",
    components: {
      Directive // Directive: Directive
    },
    data() {

      return {
        message: 'Hello World!!'
      }
    }
  }
</script>

<style scoped>

</style>