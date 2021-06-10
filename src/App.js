import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() { 

  const [tasks, setTasks] = useState(
    [
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
    ]
)

 //Delete Task
  const deleteTask = (id) => {
     console.log('delete', id)
     setTasks(tasks.filter((task) => task.id !== id))
  }

 //Toggle remainder
  const toggleRemainder = (id) => {
    console.log('Toggled', id)
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks}
       onDelete={deleteTask} 
       onToggle={toggleRemainder} /> : 'No tasks available'}
    </div>
  );
}

export default App;
