import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {FilterValueType} from "./App";

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFiler:(value: FilterValueType) => void
    addTask: (title: string) => void
}


export  const Todolist = (props: TodolistPropsType ) => {
    
    let [title, setTitle] = useState('')
    
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const  onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const  onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }}
    const onAllClickHandler = () => {
        props.changeFiler('all')
    }
    const onActiveClickHandler = () => {
        props.changeFiler('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFiler('completed')
    }
        return (
            <div>
                <h3>What to learn</h3>
                <div>
                    <input value={title}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={addTaskHandler}>+</button>
                </div>
                <ul>
                    {props.tasks.map((task) => {
                        const onClickButtonHandler = () => props.removeTask(task.id)
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={onClickButtonHandler}>✖️
                                </button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={onAllClickHandler}>
                        All
                    </button>
                    <button onClick={onActiveClickHandler}>
                        Active
                    </button>
                    <button onClick={onCompletedClickHandler}>
                        Completed
                    </button>
                </div>
            </div>
        )
    }