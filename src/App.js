import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import TaskList from './components/TaskList'
import AddTaskFrom from './components/AddTaskForm'

function App() {
  const [tasks, setTasks] = useState([
    { id: 'task_1', title: 'Learn JavaScript', status: 0 },
    { id: 'task_2', title: 'Code a To-do List', status: 1 }
  ])
  const [showIncomplete, setShowIncomplete] = useState(false)
  const [newTask, setNewTask] = useState('New task')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }
  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }
  const setTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => {
      if (taskId === task.id) {
        return { ...task, status: status ? 1 : 0 }
      }
      return task
    }))
  }
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  return (
    <div className='container'>
      <Header title='To-do List' subTitle='Get things done' />
      <TaskList tasks={tasks} showIncomplete={showIncomplete} setTaskStatus={setTaskStatus} removeTask={removeTask} setShowIncomplete={setShowIncomplete} />
      <AddTaskFrom newTask={newTask} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
    </div>
  )
}

export default App
