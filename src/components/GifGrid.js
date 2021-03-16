import React from 'react'
import { useGetFetch } from '../hooks/useGetFetch';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

const {data:images, loading} = useGetFetch( category );

    return(
        <>
            <h3 className="category"> { category } </h3>
            <div className="grid">
                { loading && <p>Cargando...</p> }
                {
                    images.map( images => (
                        <GifGridItem
                            key= { images.id }
                            { ...images }

                        />
                    ))
                }
                   
            </div>
        </>
    )







}
