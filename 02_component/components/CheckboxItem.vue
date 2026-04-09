<template>
    <li>
        <label>
            <input type="checkbox" :checked="checked"> {{ no }} - {{ name }}
        </label>
    </li>
</template>

<script>
export default {
    name: 'CheckboxItem',
    props: ['no', 'name', 'checked']
}
</script>

<style lang scoped>

</style>