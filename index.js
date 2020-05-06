new Vue({
  el: "#app",
  data: {
  	todos: [
  		{ text: 'test', done: false, id: Date.now() }
  	], 
    activeTodos: [], 
    completedTodos: [],
    showActive: false,
    showCompleted: false
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
      }
      showActive() {
      this.showActive = true
      this.showCompleted = false
      },
      showCompleted() {
      this.showCompleted = true
      this.showActive = false
      }
  }
})  
