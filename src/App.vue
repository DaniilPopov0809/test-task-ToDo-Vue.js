<template>
    <div class="min-h-screen flex flex-col">
        <TodoHeader />
        <main class="container mx-auto py-4 px-3">
            <h1 class="text-center mb-3 text-2xl font-bold">{{ archivedTodo ? "Archived ToDo" : "Active ToDo" }}</h1>
            <div class="mb-3 flex">
                <TodoButton
                    class="text-white bg-sky-400 shadow-md px-3 py-2 rounded-full hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded-full duration-300 me-3"
                    type="button" @click="changeArchivedTodo(!archivedTodo)">{{ archivedTodo ? "Show active" : "Show archive" }}
                </TodoButton>
                <TodoSelect :model-value="selectedSort" @update:model-value="changeSelectedSort" :options="sortOptions" 
                class="text-white bg-sky-400 rounded-full border p-2 hover:border-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded-full duration-300 cursor-pointer"
                />
            </div>
            <TodoList />
            <TodoModal>
                <TodoForm />
            </TodoModal>
            <TodoButton
                class="text-white bg-sky-400 shadow-md px-3 py-2 rounded-full hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded-full duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                type="button" @click="handleOpenModal" :disabled="archivedTodo">Add todo</TodoButton>
        </main>
        <TodoFooter/>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoFooter from "@/components/TodoFooter.vue";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
    components: {
        TodoList, TodoForm, TodoHeader, TodoFooter,
    },

    computed: {
        ...mapState({
            archivedTodo: state => state.todo.archivedTodo,
            selectedSort: state => state.todo.selectedSort,
            sortOptions: state => state.todo.sortOptions,
        })
    },
    methods: {
        handleOpenModal() {
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
