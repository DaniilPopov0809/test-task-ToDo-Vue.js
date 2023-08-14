<template>
    <li class="todo-item">
        <div class="todo-details">
            <p><strong>Title:</strong> {{ todo.title }}</p>
            <p><strong>Create:</strong> {{ todo.created }}</p>
            <p><strong>Content:</strong> {{ todo.content }}</p>
        </div>
        <div class="todo-operations">
            <button type="button">Edit</button>
            <button type="button">Archive</button>
            <button type="button">Delete</button>
        </div>
    </li>
</template>

<script>
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
    }
}
</script>

<style></style>
