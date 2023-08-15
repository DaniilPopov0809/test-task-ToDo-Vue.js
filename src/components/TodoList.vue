<template>
    <div>
        <ul class="todo-list" v-if="sortedTodoList.length > 0">
            <TodoItem 
            v-for="todo in sortedTodoList" 
            :key="todo.id" 
            :todo="todo" 
            />
        </ul>
        <h2 v-else>No todo</h2>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import { mapState, mapGetters } from 'vuex';

export default {
    components: {
        TodoItem,
    },
    computed: {
    ...mapState({
      todoList: state => state.todo.todoList,
    }),
    ...mapGetters({
        sortedTodoList: "todo/sortedTodoList",
        })
  },
}
</script>

<style></style>
