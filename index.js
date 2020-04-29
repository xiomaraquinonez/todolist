new Vue({
  el: "#app",
  data: {
  	todos: [
  		{ text: 'test', done: false, id: Date.now() }
  	], 
    activeTodos: [], 
    completedTodos: [],
    showActive: [false],
    showCompleted: [false]
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
      this.todos = this.completedTodos
      }
      showActive() {
      this.showActive = this.todos.filter(todo => todo.done == true)
      this.showCompleted = this.todos.filter(todo => todo.done == false)
      }
      showCompleted() {
      this.showCompleted = this.todos.filter(todo => todo.done == true)
      this.showActive = this.todos.filter(todo => todo.done == false)
      }
  }
})  
