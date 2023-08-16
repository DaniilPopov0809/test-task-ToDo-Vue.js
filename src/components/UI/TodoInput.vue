<template>
    <input :value="modelValue" @input="handleChangeInput"/>
</template>

<script>
export default {
    name: "TodoInput",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        handleChangeInput(event) {
            this.$emit('update:modelValue', event.target.value)
        } 
    }
    
}
</script>
