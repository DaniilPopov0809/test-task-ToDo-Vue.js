<template>
    <li class="todo-item">
        <div class="todo-details">
            <p><strong>Title:</strong> {{ todo.title }}</p>
            <p><strong>Create:</strong> {{ todo.created }}</p>
            <p><strong>Content:</strong> {{ todo.content }}</p>
        </div>
        <div class="todo-operations">
            <TodoButton type="button">Edit</TodoButton>
            <TodoButton type="button">Archive</TodoButton>
            <TodoButton type="button" @click="removeTodo(todo.id)">Delete</TodoButton>
        </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex';

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
    methods : {
        ...mapActions({
            removeTodo: "todo/removeTodo",
        })
    },
   
}
</script>

<style></style>
