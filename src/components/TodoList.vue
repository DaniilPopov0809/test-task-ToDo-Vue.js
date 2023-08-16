<template>
    <div>
        <table class="border-solid rounded-t-lg mx-auto overflow-hidden max-w-full w-full mb-4">
            <thead class="bg-sky-400 shadow-md">
                <tr class="text-white ">
                    <th scope="col" class="py-2 px-3">
                        Title
                    </th>
                    <th scope="col" class="py-2 px-3">
                        Created
                    </th>
                    <th scope="col" class="py-2 px-3">
                        Content
                    </th>
                    <th scope="col" class="py-2 px-3">
                        Options
                    </th>
                </tr>
            </thead>
            <tbody v-if="sortedTodoList.length > 0">
                <TodoItem v-for="todo in sortedTodoList" :key="todo.id" :todo="todo" />
            </tbody>
        </table>
        <p v-if="sortedTodoList.length === 0" class="text-center border-b mb-4 ">No todos available</p>
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
