<template>
    <li>
        <!-- 
        <label>
            <input type="checkbox" :value="id" :checked="checked"
                @change="$emit('slot-change', {id, checked: $event.target.checked})">
            <slot></slot> 사이에는 부모 컴포넌트로부터 전달받는 템플릿이 없을 떄 보여줄 UI를 작성한다.  
            <slot>레이블 없음</slot>
        </label>
        -->

        <label>
            <slot name="icon"></slot>

            <input type="checkbox" :value="id" :checked="checked"
                @change="$emit('slot-change', {id, checked: $event.target.checked})">

            <!-- <slot name="label">레이블 없음</slot> -->
            <!-- 슬롯에 이름을 지정하지 않으면 기본적으로 default라는 이름이 부여된다. -->
            <slot>레이블 없음</slot>
        </label>
    </li>
</template>

<script>
export default {
    name: 'SlotItem',
    props: ['id', 'checked'],
    emits: ['slot-change']

}
</script>

<style lang="scss" scoped>

</style>
