<template>
    <main>
        <DepartmentTable/>
        <Pagination/>
    </main>
</template>

<script setup>
    import { onMounted } from 'vue';
    import DepartmentTable from '@/components/tables/DepartmentTable.vue';
    import Pagination from '@/components/common/Pagination.vue';
    import { useDepartmentStore } from '@/stores/departmentStore';

    const departmentStore = useDepartmentStore();

    onMounted(async() => {
        try {

            const response = await departmentStore.fetchDepartments(1,10);
            
        } catch (error) {
            const {status, message} = error.response.data;
            
            if (status === 'DEPARTMENT_NOT_FOUND') {
                alert(message);
            } else if (status === 'INTERNAL_SERVER_ERROR') {
                alert('에러가 발생하였습니다.');
            }   
            
        }
    });

</script>

<style scoped>

</style>