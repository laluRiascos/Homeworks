import {useState} from "react"
import {AddCategory} from "./AddCategory"
import {GifGrid} from "./GifGrid"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['K-pop'])

    const onAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    return (
        <>
        <h1> Categoria Musica </h1>

        <AddCategory onAddCategory={onAddCategory}/>
        {
            categories.map(
                (category, key) =>
                {
                    return <GifGrid category={category} key={key}/>
                }
            )
        }
        </>
    ) 
}

export default GiftExpertApp;