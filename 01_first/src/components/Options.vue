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

        <h4>3) 관찰 속성</h4>
        <label for="x">x: </label>
        <!-- <input type="number" id="x" v-model="x"> -->
        <input type="number" id="x" v-model="values.x">

        <br>

        <label for="y">y: </label>
        <!-- <input type="number" id="y" v-model="y"> -->
        <input type="number" id="y" v-model="values.y">

        <p>
            두 수의 뺄샘 결과: <span v-text="sub"></span>
        </p>

    </div>
</template>

<script>
    export default {
        name: 'Options',
        data() {
            return {
                number: 0,
                // x: 0,
                // y: 0,
                values: {
                    x: 0,
                    y: 0
                },
                sub: 0
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
        watch: {
            // x(newValue, oldValue) {
            //     this.sub = newValue - this.y;
            // },
            // y(newValue, oldValue) {
            //     this.sub = this.x - newValue;
            // }
            values: {
                // 관찰 속성에 등록하던 함수를 handler 함수에 등록한다.
                // handler: function(newValue, oldValue)
                handler(newValue, oldValue) {
                    this.sub = newValue.x - newValue.y;
                    },
                // 객체 내부의 값이 변경될 때 handler 함수가 실행되도록 지정하는 속성
                deep: true
                }
            },

            created () {
                console.log("created() - 호출");
            },
            mounted () {
                console.log("mounted() - 호출");
            },
            updated () {
                console.log("updated() - 호출");
            },
        }

</script>

<style scoped>

</style>