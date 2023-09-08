import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
import {useState} from 'react'
function App() {
  const [tasks, setTask] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
])

//Add Tash
const addTask = (task) => {
const id = Math.floor(Math.random() * 10000) + 1
const newTask = {id, ...task}
setTask([...tasks ,newTask ])
}

//Delete function 
const deleteTask = (id) => {
  setTask(tasks.filter((task)=> task.id !== id))   //Filter the array and return a new one with all elements that don
  console.log('Delete', id);
}

//Toggle Remider
const toggleReminder = (id) => {
  setTask(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length >0 ? <Tasks task={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/> : 'No more Task to Show'}
    </div>
  );
}

export default App;
