<template>
  <div>
    <h2>Vue.js 기초</h2>

    <p>{{ message }}</p>

    <!-- <Directive/> -->
    <!-- <Options/> -->
    <!-- <Events/> -->
    <Styles/>

  </div>
</template>

<script>
  // import Directive from './components/Directive1.vue';
  import Directive from './components/Directive2.vue';
  import Options from './components/Options.vue';
  import Events from './components/Events.vue';
  import Styles from './components/Styles.vue';

  export default {
    name: 'App',
    components: {
      Directive, // Directive: Directive
      Options, // Options: Options
      Events,
      Styles
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