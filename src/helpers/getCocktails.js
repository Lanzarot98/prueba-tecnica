export const getCocktails = async() => {

    const url= 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const resp = await fetch(url);
    const data  = await resp.json();

    const cocktails = data.drinks.map( img => ({
        id: img.idDrink,
        title: img.strDrink,
        instruction: img.strInstructions,
        image: img.strDrinkThumb,
    }) )

    console.log(cocktails);
    return cocktails;

}