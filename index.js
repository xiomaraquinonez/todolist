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
    updateActiveAndCompletedLists() {
      this.completedTodos = this.todos.filter(todo => todo.done == true)
      this.activeTodos = this.todos.filter(todo => todo.done == false)
      this.todos = this.completedTodos
      }
  }
})  
