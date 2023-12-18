/*

This file defines functions for data fetching from TheCocktailDB.

It returns the object TheCocktailDB, which consists of three asynchronous
functions, each of which returns a promise.

*/


import axios from 'axios';

const apiKey = process.env.REACT_APP_COCKTAILDB_API_KEY

//testing value
let key = 0;

export const TheCocktailDB = {

  async getCocktails(ingredient) {
    //testing start
    key++;
    const uniqueKey = key;
    console.log(`getting list of cocktails: ${uniqueKey}`);
    //testing end
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php`, {
      params: {
        i: ingredient
      }
    });
    //testing start
    console.log(`returning list of cocktails: ${uniqueKey}`);
    //testing end
    return response;
  },

  async getCocktail(cocktail) {
    key++;
    const uniqueKey = key;
    console.log(`getting cocktail: ${uniqueKey}`);
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php`, {
      params: {
        s: cocktail
      }
    });
    console.log(`returning cocktail: ${uniqueKey}`);
    return response;
  },

  async getCocktailIngredients(cocktail) {
    key++;
    const uniqueKey = key;
    console.log(`getting ingredients: ${uniqueKey}`);
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php`, {
      params: {
        s: cocktail
      }
    });
    console.log(`returning list of ingredients: ${uniqueKey}`);
    return response;
  }
};