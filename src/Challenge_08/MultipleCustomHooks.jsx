import React from 'react'
import { useCounter } from '../Challenge_06/useCounter'
import { useFetch } from '../Challenge_07/useFetch'

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    return(
        <>
            <h1>MultipleCustomHooks</h1>
            <hr/>
            {
                isLoading ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ):(
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'> {data[0]?.quote} </p>
                        <footer className='blockquote-footer'> {data[0]?.quote} </footer>
                    </blockquote>
                )
            }

            <button className='btn btn-primary' onClick={() => increment()}> Next Quote</button>
        </>
    )
}
