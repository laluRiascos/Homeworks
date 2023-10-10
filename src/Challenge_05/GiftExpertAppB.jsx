import {useState} from "react"
import {AddCategoryB} from "./AddCategoryB"
import {GifGridB} from "./GifGridB"

export const GiftExpertAppB = () => {

    const [categories, setCategories] = useState([''])

    const onAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    const Reiniciar = () =>{
        setCategories([''])
      }

    return (
        <>
        <h1> Buscar Gifs </h1>
        <button onClick={ () => Reiniciar()}> Reiniciar </button>

        <AddCategoryB onAddCategory={onAddCategory}/>
        {
            categories.map(
                (category, key) =>
                {
                    return <GifGridB category={category} key={key}/>
                }
            )
        }
        </>
    ) 
}

export default GiftExpertAppB;