<template>
    <div>
        <ul class="todo-list">
            <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    components: {
        TodoItem,
    },
    props: {
        todoList: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style></style>
