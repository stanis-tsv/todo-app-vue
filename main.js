const ToDoApp = {
  data() {
    return {
      currentTask: '',
      editValue: '',
      tasks: [
        {
          text: 'Running',
          isCompleted: true,
          isEditing: false
        },
        {
          text: 'Exercise',
          isCompleted: false,
          isEditing: false
        },
        {
          text: 'Buy food',
          isCompleted: false,
          isEditing: false
        },
        {
          text: 'Work',
          isCompleted: true,
          isEditing: false
        }
      ]
    }
  },
  methods: {
    addTask () {
      this.tasks.push({
        text: this.currentTask,
        isCompleted: false
      })
      this.currentTask = ''
    },
    changeEditing (taskText) {
      this.editValue = taskText
      this.tasks = this.tasks.map(task => {
        if (task.text === taskText) {
          task.isEditing = !task.isEditing
        }
        return task
      })
    },
    editTask (taskText) {
      this.tasks = this.tasks.map(task => {
        if (task.text === taskText) {
          task.isEditing = !task.isEditing
          task.text = this.editValue
        }
        return task
      })
    }
  }
}
Vue.createApp(ToDoApp).mount('#app')