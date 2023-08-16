<template>
    <tr className="border-b">
        <td className="py-2 px-3 text-center">{{ todo.title }}</td>
        <td className="py-2 px-3 text-center">{{ todo.created }}</td>
        <td className="py-2 px-3 text-center">{{ todo.content }}</td>
        <td className="py-2 px-3">
            <div class="flex justify-end">
                <TodoButton
                    class="text-white bg-sky-400 shadow-md px-3 py-2 rounded-full hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded-full duration-300 me-2 flex justify-center items-center"
                    type="button" @click="handleOpenModal">
                    <vue-feather type="edit"></vue-feather>
                </TodoButton>
                <TodoButton
                    class="text-white bg-sky-400 shadow-md px-3 py-2 rounded-full hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded-full duration-300 me-2 flex justify-center items-center"
                    type="button" @click="handleToggleArchive">
                    <vue-feather v-if="archivedTodo" type="arrow-up"></vue-feather>
                     <vue-feather v-else type="arrow-down"></vue-feather>
                    <vue-feather type="archive"></vue-feather>
                </TodoButton>
                <TodoButton
                    class="text-white bg-sky-400 shadow-md px-3 py-2 rounded-full hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-600 focus-visible:rounded-full duration-300 flex justify-center items-center"
                    type="button" @click="removeTodo(todo.id)">
                    <vue-feather type="delete"></vue-feather>
                </TodoButton>
            </div>
        </td>
    </tr>
</template>

<script>
import { mapActions, mapState } from 'vuex';

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
    computed: {
        ...mapState({
            archivedTodo: (state) => state.todo.archivedTodo,
        })
    },
    methods: {
        handleOpenModal() {
            this.changeCurrentTodo(this.todo);
            this.changeEditTodo(true);
            this.changeVisibleModal(true);


        },
        handleToggleArchive() {
            const newTodo = { ...this.todo };
            newTodo.archive = !newTodo.archive;
            this.updateTodo(newTodo);
        },
        ...mapActions({
            removeTodo: "todo/removeTodo",
            changeVisibleModal: "todo/changeVisibleModal",
            changeEditTodo: "todo/changeEditTodo",
            changeCurrentTodo: "todo/changeCurrentTodo",
            updateTodo: "todo/updateTodo",
        })
    },

}
</script>
