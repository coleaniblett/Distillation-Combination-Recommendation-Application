import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import './Recommendations.css';

export const Recommendations = ({ ingredients }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const names = ingredients.map(ingredient => ingredient.name.toLowerCase());
  // water and various garnishes are to be ignored as ingredients
  const ingredientsToIgnore = ["water", "lemon", "lemon peel", "lime", "lime peel"];

  useEffect(() => {
    async function fetchRecommendations() {
      // Fetch recommendations and set the cocktails state
      const recommendations = await filterCocktails(names, ingredients);
      setCocktails(recommendations);
      setLoading(false);
    }

    fetchRecommendations();
  }, []);

  async function getCocktails(names) {
    const cocktails = [];
    for (const name of names) {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php', {
        params: {
          i: name
        }
      });
      const drinks = response.data.drinks.map(drink => drink.strDrink);
      for (const drink of drinks) {
        if (!cocktails.includes(drink)) {
          cocktails.push(drink);
        }
      }
    }
    return cocktails;
  }

  async function filterCocktails() {
    const cocktails = await getCocktails(names);
    const cocktailsToRemove = [];
    for (const cocktail of cocktails) {
      const cocktailIngredients = await getCocktailIngredients(cocktail);
      for (const cocktailIngredient of cocktailIngredients) {
        if (!names.includes(cocktailIngredient) && !ingredientsToIgnore.includes(cocktailIngredient)) {
          cocktailsToRemove.push(cocktail);
        }
      }
    }
    const filteredCocktails = cocktails.filter(cocktail => !cocktailsToRemove.includes(cocktail));
    return filteredCocktails;
  }

  async function getCocktailIngredients(cocktail) {
    const cocktailIngredients = [];
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/search.php', {
      params: {
        s: cocktail
      }
    })
    let i = 1;
    while (response.data.drinks[0][`strIngredient${i}`]) {
      const newIngredient = response.data.drinks[0][`strIngredient${i}`].toLowerCase();
      cocktailIngredients.push(newIngredient);
      i++;
    }
    return cocktailIngredients;
  }

  if (loading) {
    return <div id="loading-message">Loading recommendations...</div>;
  } else if (cocktails.length === 0) {
    return <div className="no-recs-message">No recommendations found</div>;
  } else {
    return (
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail}>{cocktail}</li>
        ))}
      </ul>
    );
  }
}