<template>
    <div>
        <label for="num1">첫 번째 수: </label>
        <input type="text" id="num1" v-model.number="num1">

        <br><br>

        <label for="num2">첫 번째 수: </label>
        <input type="text" id="num2" v-model.number="num2">

        <br><br>

        <button @click="add">계산하기</button>
        <p>
            결과 : {{result}}
        </p>

    </div>
</template>

<script>
import {ref} from 'vue';

export default {
    setup () {
        // 기본 타입의 데이터를 반응성을 가진 데이터로 생성할 때는 ref()를 사용한다.
        const num1 = ref(10);
        const num2 = ref(20);
        const result = ref(30);

        // 컴포넌트에서 사용할 메서드를 익명함수 또는 화살표 함수로 생성한다.
        const add = () => {
            // setup() 내부에서 ref()로 지정한 데이터에 접근할 때는 value 속성을 사용해야 한다.
            result.value = num1.value + num2.value;
        };
        
        // 반응성을 가진 데이터, 메소드, 계산된 속성 등을 템플릿에서 사용하도록 ㅐㄱ체 형태로 리턴해야 한다.
        return {num1, num2, result, add};
    }
}
</script>

<style scoped>

</style>