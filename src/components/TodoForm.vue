<template>
    <div>
        <form @submit.prevent="addTodo">
            <input v-model="todo.title" type="text" placeholder="Enter title" />
            <input v-model="todo.content" type="text" placeholder="Enter content" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
import {getCurrentDate} from "@/helpers/getCurrentDate"
import { nanoid } from "nanoid";

export default {
    data() {
        return {
            todo: {
                title: '',
                content: '',
            }
        }
    },
    methods: {
        addTodo() {
            this.todo.id = nanoid();
            this.todo.created = getCurrentDate();
            this.$emit('addTodo', this.todo);
            this.todo = {
                title: '',
                content: '',
            }
        }
    }
}
</script>

<style></style>
