<template>
    <div class="backdrop" v-if="visibleModal" @click="handleCloseModal">
        <div class="modal" @click.stop>
            
            <h2>{{ this.title }}</h2>      
            <slot></slot>

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
.backdrop {
    position: fixed;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    top:0;
    left: 0;
    right: 0;
    bottom: 0;

}

.modal {
    margin: auto;
    min-width: 400px;
    min-height: 100px;
    border-radius: 10px;
}
</style>
