<template>
    <div>
        <h1>ToDo List</h1>
        <TodoList />
        <TodoModal>
            <TodoForm />
        </TodoModal>
        <TodoButton type="button" @click="changeVisibleModal(true)">Create Todo</TodoButton>
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
        ...mapActions({
            changeVisibleModal: "todo/changeVisibleModal",
        })
    }
};
</script>

<style></style>
