import { useFetchGifs } from "../Challenge_05/useFetchGifs";
import { GifItem } from "../Challenge_05/GifItem";

export const GifGridC = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)

    return(
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                {
                    images.map((image,key) => {
                        return <GifItem key={key}{...image}></GifItem>
                    })
                }
            </div>
        </>
    )
}