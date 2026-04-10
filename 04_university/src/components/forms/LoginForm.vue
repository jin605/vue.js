<template>
    <div>
        <form>
            <h1 class="h3 mb-3 fw-normal">로그인 페이지</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="Username"
                    required>
                <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    required>
                <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-body-secondary">&copy; 2024–2026</p>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>