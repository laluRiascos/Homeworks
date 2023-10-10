import { useFetch } from "./useFetch"

export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ea22qa0eaxWqnhIIpcBJ32kVKn24IxJQ&q=${category}&limit=10&offset=0&rating=g&lang=en`
    const resp = await fetch (url)
    const {data} = await resp.json()
    const {...state } = useFetch(url)
    return gifs
}
