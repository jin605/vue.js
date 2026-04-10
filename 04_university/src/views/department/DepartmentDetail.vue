<template>
    <main>
        <h2>학과 상세 조회</h2>

        <p>{{ currentRoute.fullPath }}</p>
        <p>{{ currentRoute.path }}</p>
        <p>{{ currentRoute.params }}</p>
        <p>{{ currentRoute.params.no }}</p>
        <p>{{ currentRoute.query }}</p>
        <p>{{ currentRoute.query.name }}</p>
        <p>{{ parseInt(currentRoute.query.age)}}</p>

        <!-- <button @click="() => router.push('/')">홈으로</button> -->
        <button @click="() => router.push({name: 'home'})">홈으로</button>
        <!-- <button @click="() => router.replace({name: 'home'})">홈으로</button> -->
        <button @click="() => router.back()">뒤로가기</button>
        <button @click="() => router.forward()">앞으로가기</button>

    </main>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';


const router = useRouter();
const currentRoute = useRoute();

</script>

<style scoped>

</style>