import { TheCocktailDB } from '../../utilities/TheCocktailDB';
import { IngredientGeneralizer } from '../IngredientGeneralizer/IngredientGeneralizer';

export const GetRecommendations = () => {
  const ingredientGeneralizer = IngredientGeneralizer;
  const ingredientsToIgnore = ["water", "lemon", "lemon peel", "lime", "lime peel"];

  const getCocktails = async (names) => {
    const cocktails = {};
    await Promise.all(names.map(async (name) => {
      const response = await TheCocktailDB.getCocktails(name);
      if (response.data.drinks !== "None Found") {
        await Promise.all(response.data.drinks.map(async (drink) => {
          if (!cocktails[drink.strDrink]) {
            cocktails[drink.strDrink] = await TheCocktailDB.getCocktail(drink.strDrink);
          }
        }));
      }
    }));
    return cocktails;
  }

  const filterCocktails = async (cocktails, names) => {
    await Promise.all(Object.keys(cocktails).map(async (cocktail) => {
      const cocktailIngredients = await getCocktailIngredients(cocktail);
      await Promise.all(cocktailIngredients.map(async (cocktailIngredient) => {
        if (ingredientGeneralizer[cocktailIngredient]) {
          console.log(`Generalizing ingredient ${cocktailIngredient}`);
          cocktailIngredient = ingredientGeneralizer[cocktailIngredient];
        }
        if (!names.includes(cocktailIngredient) && !ingredientsToIgnore.includes(cocktailIngredient)) {
          delete cocktails[cocktail];
        }
      }));
    }));
    return cocktails;
  };

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