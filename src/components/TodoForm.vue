<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <TodoInput v-model="todo.title" type="text" placeholder="Enter title" />
            <TodoInput v-model="todo.content" type="text" placeholder="Enter content" />
            <TodoButton type="submit">{{ titleButton }}</TodoButton>
        </form>
    </div>
</template>

<script>
import { getCurrentDate } from "@/helpers/getCurrentDate"
import { nanoid } from "nanoid";
import { mapActions, mapState } from 'vuex';

export default {

    data() {
        return {
            todo: {
                title: '',
                content: '',
            }
        }
    },
    computed: {
        ...mapState({
            editTodo: state => state.todo.editTodo,
            currentTodo: state => state.todo.currentTodo,
            
        }),
        titleButton() {
            return this.editTodo ? "Save changes" : "Add todo";
        },
    },

    watch: {
        currentTodo: {
            immediate: true,
            handler(newValue) {
                if (this.editTodo && newValue) {
                    this.todo.title = newValue.title;
                    this.todo.content = newValue.content;
                }
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
        },
        handleEditTodo() {
            const newTodo = {...this.currentTodo};
            newTodo.title = this.todo.title; 
            newTodo.content = this.todo.content; 
            this.updateTodo(newTodo);
            this.todo = {
                title: '',
                content: '',
            }
        },
        handleSubmit() {
            this.editTodo ? this.handleEditTodo() : this.handleAddTodo();
            this.changeVisibleModal(false);
        },
        ...mapActions({
            addTodo: "todo/addTodo",
            updateTodo: "todo/updateTodo",
            changeVisibleModal: "todo/changeVisibleModal",
        })
    }
}
</script>

<style></style>
