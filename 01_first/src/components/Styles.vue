<template>
    <div>
        <h3>6. 스타일 적용</h3>

        <h4>1) 인라인 스타일</h4>

        <!-- <div style="background-color: orange; width: 200px; height: 200px;"></div> -->
        <!-- <div v-bind:style="{'background-color': 'orange', width: '200px', height: '200px'}"></div> -->
        <div :style="divStyle"
            @mouseover="overEvent"
            @mouseout="outEvent"></div>

        <h4>2) CSS 클래스 바인딩</h4>
        <label>
            <input type="checkbox" v-model="btnStyle.btnBackgroundColor">배경색 적용
        </label>

        <br>

        <!-- <button class="btnTextColor" :class="'btnBackgroundColor'">버튼 클릭</button> -->
        <button class="btnTextColor" :class="btnStyle">버튼 클릭</button>
    </div>
</template>

<script>
    export default {
        name: 'Styles',
        data() {
            return {
                divStyle: {
                    backgroundColor: 'orange', 
                    width: '200px', 
                    height: '200px'
                },
                // btnStyle: 'btnBackgroundColor'
                btnStyle: {
                    btnBackgroundColor: true
                }
            }
        },
        methods: {
            overEvent() {
                this.divStyle.backgroundColor = 'blue';
            },
            outEvent() {
                this.divStyle.backgroundColor = 'green';
            }
        },
    }
</script>

<style scoped>
    .btnTextColor {
        color: blueviolet;
    }

    .btnBackgroundColor {
        background-color: deepskyblue;
    }
</style>