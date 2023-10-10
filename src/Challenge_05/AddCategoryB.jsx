import {useState} from "react"

export const AddCategoryB = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('... Escribe Aquí')

    const onInputChange = (evt) => {
        setinputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory (inputValue);
        setinputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            < input 
                type="text" 
                placeholder="Ingresar" 
                value={inputValue}
                onChange= {(event) => onInputChange(event)}   
                />
        </form>
    ) 
}