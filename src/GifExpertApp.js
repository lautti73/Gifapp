import React, { useState } from 'react';
import {AddCategory} from '../src/components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    // const apiKey = 'ypbOTLNfe0PEDnJKZbzlB2gNssliiK8J';

    return(

        <>
            <div className="header">
                <h2 className="page-title"> GifExpertApp </h2>
                <AddCategory setCategories={ setCategories }/>
                
            </div>
            <hr />
            
            
            

            <div className="all-gifs">
                {
                    categories.map( category => 
                        <GifGrid 
                        category={ category }
                        key={ category }
                        />
                 
                    )
                }
            </div>


        </>
    )




}
