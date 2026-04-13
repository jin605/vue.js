<template>
    <main>
        <select class="form-select w-auto" v-model="listLimit">
            <option value="5">5개</option>
            <option value="10">10개</option>
            <option value="20">20개</option>
        </select>
        <DepartmentTable :departments="departmentStore.departments"/>
        <Pagination
            :current-page="currentPage"
            :page-numbers="pageNumbers"
            @change-page="changePage"/>
    </main>
</template>

<script setup>
    import { onMounted, watch } from 'vue';
    import DepartmentTable from '@/components/tables/DepartmentTable.vue';
    import Pagination from '@/components/common/Pagination.vue';
    import { useDepartmentStore } from '@/stores/departmentStore';
    import { usePagination } from '@/composables/usePagination';
    import { useRouter } from 'vue-router';

    const departmentStore = useDepartmentStore();
    const { currentPage, listLimit, totalPages, pageNumbers, setCurrentPage, setTotalCount } = usePagination();
    const router = useRouter();
    
    const changePage = (page) => {

        if (page >= 1 && page <= totalPages.value) {

            setCurrentPage(page);
        }
    }

    onMounted(async () => {
        try {
            setCurrentPage(1);

            const response = await departmentStore.fetchDepartments(currentPage.value, listLimit.value);

            setTotalCount(response.totalCount);
        } catch (error) {
            const {status, message} = error.response.data;

            if (status === 'DEPARTMENT_NOT_FOUND') {
                alert(message);
            } else if (status === 'REFRESH_TOKEN_INVALID') {
                router.push({name: 'login'});
            } else if (status === 'INTERNAL_SERVER_ERROR') {
                alert('에러가 발생하였습니다.');
            }
        }
    });

    watch(currentPage, async(newPage) => {

        try {
            // setCurrentPage(1);

            const response = await departmentStore.fetchDepartments(currentPage.value, listLimit.value);

            setTotalCount(response.totalCount);
        } catch (error) {
            const {status, message} = error.response.data;         
            
            if (status === 'DEPARTMENT_NOT_FOUND') {
                alert(message);
            } else if (status === 'REFRESH_TOKEN_INVALID') {
                router.push({name: 'login'});
            } else if (status === 'INTERNAL_SERVER_ERROR') {
                alert('에러가 발생하였습니다.');
            }
        }

    });

    watch(listLimit, async(newListLimit) => {

        try {
            setCurrentPage(1);

            const response = await departmentStore.fetchDepartments(currentPage.value, listLimit.value);

            setTotalCount(response.totalCount);
        } catch (error) {
            const {status, message} = error.response.data;         
            
            if (status === 'DEPARTMENT_NOT_FOUND') {
                alert(message);
            } else if (status === 'REFRESH_TOKEN_INVALID') {
                router.push({name: 'login'});
            } else if (status === 'INTERNAL_SERVER_ERROR') {
                alert('에러가 발생하였습니다.');
            }
        }

    });
    
</script>

<style scoped>

</style>