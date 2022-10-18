import { useEffect, useState } from "react";
import { getCocktails } from "../helpers/getCocktails";



// recordar que un hook no es más que una función que regresa algo, en este caso un objeto
// este es un custom Hook
export const useFetchCocktail= ( ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getCocktails(  );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, [] );

  return {
    images,
    isLoading, // da lo mismo si llamamos isLoading: isLoading esto da verdadero pues es lo que esta por default
  }
}