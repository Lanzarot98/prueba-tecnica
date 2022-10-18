import {useState} from 'react'
import { CocktailGrid } from './components/CocktailGrid';
// import { AddCategory, GifGrid } from './components';

export const CocktailApp = () => { // hace referencia a toda la página
  const [cocktails, setCocktails] = useState([1]);

  const onRechargeCocktails = () => {
    setCocktails([ cocktails[0]+1,...cocktails, ]);
  }


  return (
    <>
      {/* titulo */}
      <h1>CocktailsApp</h1>
    
      {/* input */}
      {/* <AddCategory 
          onNewCategory={ (value) => onAddCategory(value)} // no importa el nombre del argumento
      /> */}

      {/* Listado de Gif */} 
      <button onClick={ onRechargeCocktails }>Add Random Cocktail</button>
      
      { 
        cocktails.map( (cocktail) => (
          <CocktailGrid 
            key={ cocktail } 
            cocktail={ cocktail } 
            title={ cocktail } 
            instruction={ cocktail }
          />
        )) 
      }
      

      {/* Gif Item */}

    </>
    
  )
}
