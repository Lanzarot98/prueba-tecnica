import { useEffect, useState } from "react";
import { getCocktails } from "../helpers/getCocktails";
import { CocktailItem } from "./CocktailItem";


export const CocktailGrid = ({ cocktail }) => {
    
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newCocktails = await getCocktails();
        setImages(newCocktails);
    }

    useEffect(() => {
        getImages();
    }, [])

    // const onRechargeCocktails = () => {
    //     setImages([ ...cocktails, ]);
    //   }

  return (
    <>
        <h3>{ cocktail }</h3>
        
        {/* <button onClick={ onRechargeCocktails }>Recharge</button> */}
        <div className="card-grid">
            {
                images.map( cocktail => (
                    <CocktailItem 
                    key={cocktail.id} 
                    title={cocktail.title} 
                    instruction={cocktail.instruction}
                    url={ cocktail.image }
                    />
                    
                ) )
            }

        </div>
        
    </>
  )
}
