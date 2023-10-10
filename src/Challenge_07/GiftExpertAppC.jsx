import {useState} from "react"
import { AddCategoryB } from "../Challenge_05/AddCategoryB"
import { GifGridC } from "./GifGridC"

export const GiftExpertAppC = () => {

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
                    return <GifGridC category={category} key={key}/>
                }
            )
        }
        </>
    ) 
}

export default GiftExpertAppC;