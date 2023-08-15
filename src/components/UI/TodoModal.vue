<template>
    <div class="backdrop" v-if="visibleModal" @click="changeVisibleModal(false)">
        <div class="modal" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    name: "TodoModal",
    props: {
        show: Boolean,
    },
    computed: {
        ...mapState({
            visibleModal: state => state.todo.visibleModal,
        })
    },
    methods: {
        ...mapActions({
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
