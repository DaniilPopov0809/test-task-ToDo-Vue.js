<template>
    <div v-if="visibleModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="modal-overlay" @click="handleCloseModal"></div>
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-md z-50 overflow-y-auto relative">
      <TodoButton @click="handleCloseModal" class="absolute top-4 right-6 text-sky-400 hover:text-sky-600">
        <vue-feather type="x-circle"></vue-feather>
      </TodoButton>
      <div class="modal-content py-4 text-left px-6">
        <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    name: "TodoModal",
    computed: {
        ...mapState({
            visibleModal: state => state.todo.visibleModal,
            editTodo: state => state.todo.editTodo,
        }),
        title() {
            return this.editTodo ? 'Edit todo' : 'Create todo';
        }
    },
    methods: {
        handleCloseModal() {
            this.changeCurrentTodo(null);
            this.changeVisibleModal(false);
        },
        ...mapActions({
            changeCurrentTodo: "todo/changeCurrentTodo",
            changeVisibleModal: "todo/changeVisibleModal",
        })
    }
    
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>


