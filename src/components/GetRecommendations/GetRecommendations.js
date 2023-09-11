import { TheCocktailDB } from '../../utilities/TheCocktailDB';
import { IngredientGeneralizer } from '../IngredientGeneralizer/IngredientGeneralizer';

export const GetRecommendations = () => {
  const ingredientGeneralizer = IngredientGeneralizer;
  const ingredientsToIgnore = ["water", "lemon", "lemon peel", "lime", "lime peel"];

  const getCocktails = async (names) => {
    const cocktails = {};
    for (const name of names) {
      const response = await TheCocktailDB.getCocktails(name);
      if (response.data.drinks !== "None Found") {
        for (const drink of response.data.drinks) {
          if (!cocktails[drink.strDrink]) {
            cocktails[drink.strDrink] = await TheCocktailDB.getCocktail(drink.strDrink);
          }
        }
      }
    }
    return cocktails;
  }

  const filterCocktails = async (cocktails, names) => {
    for (const cocktail of Object.keys(cocktails)) {
      const cocktailIngredients = await getCocktailIngredients(cocktail);
      for (let cocktailIngredient of cocktailIngredients) {
        if (ingredientGeneralizer[cocktailIngredient]) {
          console.log(`Generalizing ingredient ${cocktailIngredient}`);
          cocktailIngredient = IngredientGeneralizer[cocktailIngredient];
        }
        if (!names.includes(cocktailIngredient) && !ingredientsToIgnore.includes(cocktailIngredient)) {
          delete cocktails[cocktail];
        }
      }
    }
    return cocktails;
  }

  const getCocktailIngredients = async (cocktail) => {
    const cocktailIngredients = [];
    const response = await TheCocktailDB.getCocktailIngredients(cocktail);
    let i = 1;
    while (response.data.drinks[0][`strIngredient${i}`]) {
      const newIngredient = response.data.drinks[0][`strIngredient${i}`].toLowerCase();
      cocktailIngredients.push(newIngredient);
      i++;
    }
    return cocktailIngredients;
  }

  return { getCocktails, filterCocktails };
}