import { useState } from "react"

export const TodoAdd = ({ onNewTodo}) =>{
    const [task, setTask] = useState("")
    const onFormSubmit = (e) => {
        if(task.replaceAll(" ","").length > 0){
            e.preventDefault()

            const newTodo = {
                id: new Date().getTime(),
                description: task,
                done: false
            }

            onNewTodo(newTodo)
            setTask("")
        }
    }

    return(
        <form onSubmit={(event) => onFormSubmit(event)}>
            <input
                type="text"
                placeholder="Tarea"
                className="form-control"
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )

}