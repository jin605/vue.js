<template>
    <main class="form-signin w-100 m-auto">
        <LoginForm @form-submit="formSubmit"></LoginForm>
    </main>
</template>

<script setup>
    import '@/assets/css/auth/sign-in.css'
    import LoginForm from '@/components/forms/LoginForm.vue';

    const formSubmit = (formData) => {
        alert('form-submit 이벤트 수신');

        console.log(formData);
    };
</script>

<style scoped>

</style>