import axios from 'axios';

const apiKey = '';

export const TheCocktailDB = {

  async getCocktails(ingredient) {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php`, {
      params: {
        i: ingredient
      }
    });
    return response;
  },

  async getCocktailIngredients(cocktail) {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php`, {
      params: {
        s: cocktail
      }
    });
    return response;
  }
};