<template>
<div>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center">
    <label for="title" class="block text-gray-700 text-sm font-bold flex self-start mb-2">Title:</label>
    <TodoInput
      v-model="todo.title"
      id="title"
      type="text"
      placeholder="Enter title"
      :required="isTitleRequired"
      class="rounded border p-2 w-full hover:border-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded duration-300 mb-4"
    />
    
    <label for="content" class="block text-gray-700 text-sm font-bold flex self-start mb-2">Content:</label>
    <TodoInput
      v-model="todo.content"
      id="content"
      type="text"
      placeholder="Enter content"
      class="rounded border p-2 w-full hover:border-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded duration-300 mb-4"
    />
    
    <TodoButton
      class="text-white bg-sky-400 shadow-md px-3 py-2 rounded-full hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded-full duration-300 "
      type="submit"
    >
      {{ titleButton }}
    </TodoButton>
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
            },
            isTitleRequired: true,
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
            this.todo.archive = false;
            this.addTodo(this.todo);
            this.todo = {
                title: '',
                content: '',
            }
        },
        handleEditTodo() {
            const newTodo = { ...this.currentTodo };
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
