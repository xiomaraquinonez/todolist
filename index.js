new Vue({
  el: "#app",
  data: {
  	todos: [
  		{ text: 'test', done: false, id: Date.now() }
  	], 
    activeTodos: [], 
    completedTodos: []
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
    swapToCompleted() {
      this.todos = this.activeTodos.concat(this.completedTodos) 
      console.log(this.todos)
      this.completedTodos = this.todos.filter(todo => todo.done == true)
      this.activeTodos = this.todos.filter(todo => todo.done == false)
      this.todos = this.completedTodos
    },
    swapToActive() {
      this.todos = this.activeTodos.concat(this.completedTodos) 
      this.completedTodos = this.todos.filter(todo => todo.done == true)
      this.activeTodos = this.todos.filter(todo => todo.done == false)
      this.todos = this.activeTodos
    }
  }
}) 
