import axios from 'axios';

const apiKey = process.env.REACT_APP_COCKTAILDB_API_KEY

let key = 0;

export const TheCocktailDB = {

  async getCocktails(ingredient) {
    key++;
    const uniqueKey = key;
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php`, {
      params: {
        i: ingredient
      }
    });
    return response;
  },

  async getCocktail(cocktail) {
    key++;
    const uniqueKey = key;
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php`, {
      params: {
        s: cocktail
      }
    });
    return response;
  },

  async getCocktailIngredients(cocktail) {
    key++;
    const uniqueKey = key;
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php`, {
      params: {
        s: cocktail
      }
    });
    return response;
  }
};