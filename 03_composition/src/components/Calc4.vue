<template>
    <div>
        <label for="number">숫자 : </label>
        <input type="text" id="number" v-model.number="state.number">

        <p>
            결과 : {{state.result}}
        </p>

    </div>
</template>

<script>
import {reactive, watchEffect} from 'vue';

export default {

    setup () {
        // const number = ref(0);
        // const result = ref(0);
        const state = reactive({number: 0, result: 0});

        // Vue 3에서 바응성 데이터를 추적하는 새로운 방법   
        watchEffect(() => {
            state.result = state.number*2;

        });

        // return {number, result};
        return {state};
    }

}
</script>

<style scoped>

</style>