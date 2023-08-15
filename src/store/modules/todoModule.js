export const todoModule = {
  state: () => ({
    todoList: JSON.parse(localStorage.getItem("todoList")) || [
      {
        id: "vperTKBsSa_qi4pesmGNA",
        title: "Shopping List",
        created: "Jule 27, 2023",
        content: "Tomatos, bread",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4pesmGLD",
        title: "Books",
        created: "May 07, 2023",
        content: "Learn startup",
        archive: true,
      },
    ],
    editTodo: false,
    currentTodo: null,
    visibleModal: false,
    archivedTodo: false,
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "by title" },
      { value: "created", name: "by date" },
    ],
  }),

  getters: {
    filterTodoList: (state) => {
      return state.todoList.filter(
        (todo) => todo.archive === state.archivedTodo
      );
    },
    sortedTodoList(state, getters) {
      return getters.filterTodoList.sort((todo1, todo2) =>
        todo1[state.selectedSort]?.localeCompare(todo2[state.selectedSort])
      );
    },
  },

  mutations: {
    addTodo(state, todo) {
      state.todoList.push(todo);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    removeTodo(state, todoId) {
      const index = state.todoList.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        state.todoList.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(state.todoList));
      }
    },
    updateTodo(state, newTodo) {
      const index = state.todoList.findIndex((todo) => todo.id === newTodo.id);
      state.todoList[index] = newTodo;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    changeCurrentTodo(state, todo) {
      state.currentTodo = todo;
    },
    changeVisibleModal(state, status) {
      state.visibleModal = status;
    },
    changeEditTodo(state, status) {
      state.editTodo = status;
    },
    changeArchivedTodo(state, status) {
      state.archivedTodo = status;
    },
    changeSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
  },
  },

  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
    removeTodo({ commit }, todoId) {
      commit("removeTodo", todoId);
    },
    updateTodo({ commit }, newTodo) {
      commit("updateTodo", newTodo);
    },
    changeCurrentTodo({ commit }, todo) {
      commit("changeCurrentTodo", todo);
    },
    changeVisibleModal({ commit }, status) {
      commit("changeVisibleModal", status);
    },
    changeEditTodo({ commit }, status) {
      commit("changeEditTodo", status);
    },
    changeArchivedTodo({ commit }, status) {
      commit("changeArchivedTodo", status);
    },
  },

  namespaced: true,
};
