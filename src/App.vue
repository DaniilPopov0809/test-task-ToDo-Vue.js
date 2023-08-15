<template>
    <div>
        <h1>ToDo List</h1>
        <TodoList />
        <TodoModal>
            <TodoForm />
        </TodoModal>
        <TodoButton type="button" @click="handleOpenModal">Add todo</TodoButton>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import { mapActions } from "vuex";

export default {
    components: {
        TodoList, TodoForm
    },
    methods: {
        handleOpenModal () {
            this.changeEditTodo(false);
            this.changeVisibleModal(true);
        },
        ...mapActions({
            changeVisibleModal: "todo/changeVisibleModal",
            changeEditTodo: "todo/changeEditTodo",
        })
    }
};
</script>

<style></style>
