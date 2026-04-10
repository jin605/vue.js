<template>
  <div>
    <!-- 요청된 URI 경로와 router 객체의 routes배열에 있는 경로를 비교하여 매치된 라우트의 컴포넌트를 마운트한다. -->
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  setup () {
    

    return {}
  }
}
</script>

<style scoped>

</style>