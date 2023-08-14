<template>
    <div>
        <ul class="todo-list">
            <li v-for="todo in todoList" :key="todo.id" class="todo-item">
                <div class="todo-details">
                    <p><strong>Title:</strong> {{ todo.title }}</p>
                    <p><strong>Create:</strong> {{ todo.created }}</p>
                    <p><strong>Content:</strong> {{ todo.content }}</p>
                </div>
                <div class="todo-operations">
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        todoList: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style></style>
