<template>
    <div>
        <ul class="todo-list" v-if="todoList.length > 0">
            <TodoItem 
            v-for="todo in todoList" 
            :key="todo.id" 
            :todo="todo" 
            />
        </ul>
        <h2 v-else>No todo</h2>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import { mapState } from 'vuex';

export default {
    components: {
        TodoItem,
    },
    computed: {
    ...mapState({
      todoList: state => state.todo.todoList,
    }),
  },
}
</script>

<style></style>
