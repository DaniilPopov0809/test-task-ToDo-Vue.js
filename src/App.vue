<template>
    <div>
        <h1>ToDo List</h1>
        <TodoList :todoList="todoList" />
        <TodoForm @createTodo="handleCreateTodo"/>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
    components: {
        TodoList, TodoForm
    },
    data() {
        return {
            todoList: [
                {
                    id: "vperTKBsSa_qi4pesmGNA",
                    title: "Shopping List",
                    created: "Jule 27, 2023",
                    content: "Tomatossdd, bread",
                    archive: false,
                },
                {
                    id: "vperTKBsSa_qi4pesmGLD",
                    title: "Books",
                    created: "May 07, 2023",
                    content: "Learn startup",
                    archive: true,
                },
                {
                    id: "vperTKBsSa_qi4pesmMAC",
                    title: "New Feature",
                    created: "March 15, 2023",
                    content: "Implant",
                    archive: false,
                },
                {
                    id: "vperTKBsSa_qi4pesmOLX",
                    title: "To do exercise",
                    created: "June 20, 2023",
                    content: "Run, Push ups",
                    archive: false,
                },
            ],
        
        };
    },
    methods: {
        handleCreateTodo(todo) {
          this.todoList.push(todo);
        }
    }
    
};
</script>

<style></style>
