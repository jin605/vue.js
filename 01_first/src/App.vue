<template>
  <div>
    <h2>Vue.js 기초</h2>

    <p>{{ message }}</p>

    <!-- <Directive/> -->
    <Options/>

  </div>
</template>

<script>
  // import Directive from './components/Directive1.vue';
  import Directive from './components/Directive2.vue';
  import Options from './components/Options.vue';

  export default {
    name: 'App',
    components: {
      Directive, // Directive: Directive
      Options // Options: Options
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