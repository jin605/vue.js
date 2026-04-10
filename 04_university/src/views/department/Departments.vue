<template>
    <main>
        <h2>학과 목록 조회</h2>

    </main>
</template>

<script setup>
    import apiClient from '@/api';
import { onMounted } from 'vue';
    // axios 사용법
    // const fetchDepartments = () => {
    //     apiClient.get('/api/v1/department-service/departments?page=1&numOfRows=10')
    //     // 비동기 통신이 성공적으로 완료되었을 때 호출되는 콜백 함수를 지정한다.
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     // 비동기 통신이 실패했을 때 호출되는 콜백 함수를 지정한다.
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // async / await 사용
    //  - 자바 스크립트에서 비동기 작업을 효과적으로 처리할 수 있다.
    //  - 직접 axios를 사용할 떄와 비교해 콜백 함수, 예외 처리가 간결해진다.
    //  - async는 비동기 작업을 포함하는 함수의 앞부분에 작성한다.
    //  - await는 async 함수 내에서만 작성할 수 있고 비동기 작업의 완료를 기다린다.
    const fetchDepartments = async () => {
        try {
            const response = 
                await apiClient.get('/api/v1/department-service/departments?page=1&numOfRows=10');

            console.log(response);
            
        } catch (error) {
            
            console.log(error)
        }
    };

    onMounted(() => {
        fetchDepartments();
    })
</script>

<style scoped>

</style>