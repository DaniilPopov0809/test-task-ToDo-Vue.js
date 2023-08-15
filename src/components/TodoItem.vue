<template>
    <li class="todo-item">
        <div class="todo-details">
            <p><strong>Title:</strong> {{ todo.title }}</p>
            <p><strong>Create:</strong> {{ todo.created }}</p>
            <p><strong>Content:</strong> {{ todo.content }}</p>
        </div>
        <div class="todo-operations">
            <TodoButton type="button" @click="handleOpenModal">Edit</TodoButton>
            <TodoButton type="button" @click="handleToggleArchive">{{archivedTodo? "Unarchive":"Archive"}}</TodoButton>
            <TodoButton type="button" @click="removeTodo(todo.id)">Delete</TodoButton>
        </div>
    </li>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
        default: () => ({
            id: '',
            title: '',
            created: '',
            content: '',
            archive: false,
        }),
        validator: (value) => {
            return typeof value.id === 'string' &&
                typeof value.title === 'string' &&
                typeof value.created === 'string' &&
                typeof value.content === 'string' &&
                typeof value.archive === 'boolean';
        }
    },
    computed: {
        ...mapState({
            archivedTodo: (state) => state.todo.archivedTodo,
        })
    },
    methods : {
        handleOpenModal() {
            this.changeCurrentTodo(this.todo);
            this.changeEditTodo(true);
            this.changeVisibleModal(true);
            
            
        },
        handleToggleArchive() {
            const newTodo = {...this.todo};
            newTodo.archive = !newTodo.archive;
            this.updateTodo(newTodo);
        },
        ...mapActions({
            removeTodo: "todo/removeTodo",
            changeVisibleModal: "todo/changeVisibleModal",
            changeEditTodo: "todo/changeEditTodo",
            changeCurrentTodo: "todo/changeCurrentTodo",
            updateTodo: "todo/updateTodo",
        })
    },
   
}
</script>

<style></style>
