new Vue({
  el: "#app",
  data: {
  	todos: [
  		{ text: 'test', done: false, id: Date.now() }
  	], 
    activeTodos: [], 
    completedTodos: [],
    showActive: false,
    showCompleted: false,
    showAll: false
  },
  methods: {
  	addTodo({target}){
    	this.todos.push({text: target.value, done: false, id: Date.now()})
      target.value = ''
      console.log(this.todos)
    },
    removeTodo(id) {
    	this.todos = this.todos.filter(todo => todo.id !== id)
    },
    updateActiveAndCompletedLists() {
      this.completedTodos = this.todos.filter(todo => todo.done == true)
      this.activeTodos = this.todos.filter(todo => todo.done == false)
      },
      showActiveList() {
      this.updateActiveAndCompletedLists()
      this.showActive = true
      this.showCompleted = false
      this.showAll = false
      },
      showCompletedList() {
      this.updateActiveAndCompletedLists()
      this.showCompleted = true
      this.showActive = false
      this.showAll = false

      },
      showAllList() {
      this.updateActiveAndCompletedLists()
      this.showCompleted = false
      this.showActive = false
      this.showAll = true
  }
}
