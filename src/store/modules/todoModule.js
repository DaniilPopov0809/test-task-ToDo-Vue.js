export const todoModule = {
  state: () => ({
    todoList: JSON.parse(localStorage.getItem("todoList")) || [
      {
        id: "vperTKBsSa_qi4pesmGNA",
        created: "Jule 27, 2023",
        title: "Shopping List",
        content: "Tomatos, bread",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4pesmGLD",
        created: "May 07, 2023",
        title: "Doctor",
        content:
          "I’m gonna have a dentist appointment on the 15/5/2023, I moved it from 20/5/2023",
        archive: true,
      },
      {
        id: "vperTKBsSa_qi4pesmMAC",
        created: "March 15, 2023",
        title: "New Feature",
        content: "Implant",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4pesmOLX",
        created: "June 20, 2023",
        title: "To do exercise",
        content: "Run, Push ups",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4pe34ffg",
        created: "June 15, 2023",
        title: "Create App",
        content: "Food app",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4pessdfd",
        created: "Jule 31, 2023",
        title: "Clean window",
        content: "",
        archive: false,
      },
      {
        id: "vperTKBsSa_qi4peyjjjm",
        created: "Jule 31, 2023",
        title: "Buy toy",
        content: "",
        archive: false,
      },
    ],
    editTodo: false,
    currentTodo: null,
    visibleModal: false,
    archivedTodo: false,
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "Sort by title" },
      { value: "created", name: "Sort by date" },
    ],
  }),

  getters: {
    filterTodoList: (state) => {
      return state.todoList.filter(
        (todo) => todo.archive === state.archivedTodo
      );
    },
    sortedTodoList(state, getters) {
        return getters.filterTodoList.sort((todo1, todo2) => {
    const value1 = todo1[state.selectedSort];
    const value2 = todo2[state.selectedSort];
    
    const date1 = new Date(value1);
    const date2 = new Date(value2);
    
    if (!isNaN(date1) && !isNaN(date2)) {
      return date1 - date2;
    }
    
    return value1?.localeCompare(value2);
  });
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
