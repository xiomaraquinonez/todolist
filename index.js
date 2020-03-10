new Vue({
  el: "#app",
  data: {
  	todos: [
  		{ text: 'test', done: false, id: Date.now() }
  	]
  },
  methods: {
  	addTodo({target}){
    	this.todos.push({text: target.value, done: false, id: Date.now()})
      target.value = ''
    },
    removeTodo(id) {
    	console.log('removeTodo has been clicked')
    	this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}) 
