<template>
    <div>
        <h3>4. 옵션 객체</h3>

        <h4>1) 계산된 속성</h4>

        <label for="number">숫자 : </label>
        <input type="number" id="number" v-model="number">

        <p>
            <!-- 계산된 속성을 여러 번 사용하더라도 sqrt()를 여러 번 호출하는 것이 아니다. -->
            <!-- sqrt()의 실행 결과를 가지고 있는 sqrt 계산된 속성의 값을 사용한다. -->
            입력한 수의 제곱: <span v-text="sqrt"></span>
            <br>
            입력한 수의 제곱: <span v-text="sqrt"></span>
        </p>

        <h4>2) 메소드</h4>
        <p>
            <!-- 동일한 메소드를 여러 번 호출해서 사용한다. -->
            <!-- 동일한 값을 같은 화면에 여러 번 출력해야 할 경우에는 계산된 속성을 사용하는 것이 좋다. -->
            1부터 입력한 값까지의 합: <span v-text="sum()"></span>
            <br>
            1부터 입력한 값까지의 합: <span v-text="sum()"></span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Options',
        data() {
            return {
                number: 0
            }
        },
        computed: {
            sqrt() {
                return this.number * this.number; 
            }
        },
        methods: {
            sum() {
                return (this.number* (this.number +1)) /2;
                
            }
        },
    }
</script>

<style scoped>

</style>