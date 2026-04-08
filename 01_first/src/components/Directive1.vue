<template>
    <div>
        <!-- <h3>{{ title }}</h3> -->
        <!-- <h3 v-text="title"></h3> -->
        <h3 v-html="title"></h3>
        <!-- <img width="300px" v-bind:src="imgPath"> -->
        <img width="300px" :src="imgPath">
        

        <form onsubmit="return false;">
            <label for="userName">이름 : </label>
            <!-- <input type="text" name="userName" id="userName" v-model="name"> -->
            <!-- <input type="text" name="userName" id="userName" v-model.lazy="name"> -->
            <input type="text" name="userName" id="userName" v-model.lazy.trim="name">

            <br>

            <label for="userAge">나이 : </label>
            <!-- <input type="number" name ="userAge" id="userAge" v-model.lazy.trim="age"> -->
            <input type="text" name ="userAge" id="userAge" v-model.lazy.number="age">

            <br>

            <label><input type="radio" name="gender" value="M" v-model="gender">남자</label>
            <label><input type="radio" name="gender" value="F" v-model="gender">여자</label>

            <br>

            <label><input type="checkbox" name="hobby" value="음악" v-model="hobbies">음악</label>
            <label><input type="checkbox" name="hobby" value="운동" v-model="hobbies">운동</label>
            <label><input type="checkbox" name="hobby" value="독서" v-model="hobbies">독서</label>
            <label><input type="checkbox" name="hobby" value="영화" v-model="hobbies">영화</label>

            <br>

            <label>
                <!-- <input type="checkbox" name="agree" v-model="agree"> 위 내용에 동의합니다. -->
                <input type="checkbox" name="agree" v-model="agree" true-value="Y" false-value="N"> 위 내용에 동의합니다.
            </label>

            <select name="contry" v-model="country">
                <option value="">국가를 선택해주세요.</option>
                <option value="한국">한국</option>
                <option value="미국">미국</option>
                <option value="중국">중국</option>
                <option value="일본">일본</option>
                <option value="프랑스">프랑스</option>
            </select>
        </form>


    </div>
</template>

<script>
    export default {
        name: 'Directive1',
        data() {
            return {
                title: '<i>1. 기본 디렉티브</i>',
                imgPath: 'https://i.namu.wiki/i/wyIOzTnbvnceSbei3tTj0zGGnbbjloNIjp8D2MtoFzUcs-nRawxiX0skqAG4US18D69fk81M_9t1oKpisjspt4cYyZqNpy40_xwLsOv8OxXe354BnbFERquAZnUNK6X3AB_i4Dm0qPEv68ROwC83Hw.webp',
                name: '미니이',
                age: 34,
                gender: 'M',
                hobbies: [],
                agree: 'N',
                country: ''

            }
        }
    }
</script>

<style scoped>

</style>