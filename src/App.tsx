import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] =useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState<FilterValueType>('all')

    let taskForTodolist = tasks
    if (filter === 'active') {
        taskForTodolist = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(task => task.isDone)
    }
    const changeFiler = (value: FilterValueType) => {
        setFilter(value)
    }

    const removeTask = (taskId: string) => {
        let filteredTask = tasks.filter(task => task.id !== taskId)
        setTasks(filteredTask)
    }
    const addTask = (taskId: string) => {
      let newTask =  {
          id: v1(),
          title: taskId,
          isDone: false
      }
      setTasks([newTask, ...tasks ])
    }


    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFiler={changeFiler}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
