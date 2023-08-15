export const todoModule = {
  state: () => ({
    todoList: [
      {
        id: "vperTKBsSa_qi4pesmGNA",
        title: "Shopping List",
        created: "Jule 27, 2023",
        content: "Tomatossdd, bread",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4pesmGLD",
        title: "Books",
        created: "May 07, 2023",
        content: "Learn startup",
        archive: true,
      },
      {
        id: "vperTKBsSa_qi4pesmMAC",
        title: "New Feature",
        created: "March 15, 2023",
        content: "Implant",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4pesmOLX",
        title: "To do exercise",
        created: "June 20, 2023",
        content: "Run, Push ups",
        archive: false,
      },
    ],
    editTodo: false,
    currentTodo: null,
    visibleModal: false,
  }),

  mutations: {
    addTodo(state, todo) {
      state.todoList.push(todo);
    },
    removeTodo(state, todoId) {
      const index = state.todoList.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        state.todoList.splice(index, 1);
      }
    },
    updateTodo(state, newTodo) {
      const index = state.todoList.findIndex((todo) => todo.id === newTodo.id);
      state.todoList[index] = newTodo;
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
  },

  namespaced: true,
};
