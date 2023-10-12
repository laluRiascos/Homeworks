import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { TodoReducer } from "./TodoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los Challenge",
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState)

    const handleNewTodo = (todo) => {
        const action = {
            type: type.CREATE_TODO,
            payload: todo
        }
        dispatch( action )
    }

    return <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos}/>
            </div>
            <div>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>

    </>
}