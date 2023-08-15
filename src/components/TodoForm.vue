<template>
    <div>
        <form @submit.prevent="handleAddTodo">
            <TodoInput v-model="todo.title" type="text" placeholder="Enter title" />
            <TodoInput v-model="todo.content" type="text" placeholder="Enter content" />
            <TodoButton type="submit">Add</TodoButton>
        </form>
    </div>
</template>

<script>
import { getCurrentDate } from "@/helpers/getCurrentDate"
import { nanoid } from "nanoid";
import { mapActions } from 'vuex';

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
        handleAddTodo() {
            this.todo.id = nanoid();
            this.todo.created = getCurrentDate();
            this.addTodo(this.todo);
            this.todo = {
                title: '',
                content: '',
            }
            this.changeVisibleModal(false);
        },
        ...mapActions({
            addTodo: "todo/addTodo",
            changeVisibleModal: "todo/changeVisibleModal",
        })
    }
}
</script>

<style></style>
