<template>
  <div>
    <h2>Composition API</h2>

    <h3>1. 반응성을 가진 상태 데이터</h3>
    <Calc1/>

    <h3>2. 계산된 속성</h3>
    <Calc2/>

    <h3>3. 관찰 속성</h3>
    <!-- <Calc3/> -->
    <Calc4/>
    
    
    
  </div>
</template>

<script>
import Calc1 from './components/Calc1.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';

export default {
    setup () { 
      

      return {}
    },
    components: {
      Calc1,
      Calc2,
      Calc3,
      Calc4

    },
}
</script>

<style scoped>

</style>