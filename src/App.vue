<template>
    <div>
        <h1>{{ archivedTodo? "Archived ToDo" : "Active ToDo" }}</h1>
        <TodoList />
        <TodoModal>
            <TodoForm />
        </TodoModal>
        <TodoButton type="button" @click="handleOpenModal" :disabled="archivedTodo">Add todo</TodoButton>
        <TodoButton type="button" @click="changeArchivedTodo(!archivedTodo)">{{ archivedTodo? "Show active" : "Show archive" }}</TodoButton>
        <TodoSelect
        :model-value="selectedSort"
        @update:model-value="changeSelectedSort"
        :options="sortOptions"
        />
    </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
    components: {
        TodoList, TodoForm
    },

    computed: {
        ...mapState({
            archivedTodo: state => state.todo.archivedTodo,
            selectedSort: state => state.todo.selectedSort,
            sortOptions: state => state.todo.sortOptions,
        })
    },
    methods: {
        handleOpenModal () {
            this.changeEditTodo(false);
            this.changeVisibleModal(true);
        },
        ...mapActions({
            changeVisibleModal: "todo/changeVisibleModal",
            changeEditTodo: "todo/changeEditTodo",
            changeArchivedTodo: "todo/changeArchivedTodo",
            
        }),
        ...mapMutations({
            changeSelectedSort: "todo/changeSelectedSort",
        })
    }
};
</script>

<style></style>
