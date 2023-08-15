export const todoModule = {
  state: () => ({
    todoList: JSON.parse(localStorage.getItem('todoList')) || [],
    editTodo: false,
    currentTodo: null,
    visibleModal: false,
  }),

  mutations: {
    addTodo(state, todo) {
      state.todoList.push(todo);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    removeTodo(state, todoId) {
      const index = state.todoList.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        state.todoList.splice(index, 1);
        localStorage.setItem('todoList', JSON.stringify(state.todoList));
      }
    },
    updateTodo(state, newTodo) {
      const index = state.todoList.findIndex((todo) => todo.id === newTodo.id);
      state.todoList[index] = newTodo;
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
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
