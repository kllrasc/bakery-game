import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Game data
type Recipe = {
  id: number;
  name: string;
  ingredients: { [key: string]: number };
  price: number;
  timeToBake: number;
  unlockLevel: number;
};

type GameState = {
  money: number;
  inventory: { [key: string]: number };
  level: number;
  experience: number;
  experienceToNextLevel: number;
  recipes: Recipe[];
  activeBakes: { recipeId: number; finishTime: number }[];
};

const initialGameState: GameState = {
  money: 50,
  inventory: {
    flour: 20,
    sugar: 20,
    eggs: 10,
    butter: 5,
  },
  level: 1,
  experience: 0,
  experienceToNextLevel: 100,
  recipes: [
    {
      id: 1,
      name: 'Chocolate Chip Cookies',
      ingredients: { flour: 2, sugar: 1, eggs: 1, butter: 1 },
      price: 10,
      timeToBake: 5,
      unlockLevel: 1,
    },
    {
      id: 2,
      name: 'Vanilla Cupcakes',
      ingredients: { flour: 3, sugar: 2, eggs: 2, butter: 1 },
      price: 15,
      timeToBake: 8,
      unlockLevel: 2,
    },
    {
      id: 3,
      name: 'Strawberry Cake',
      ingredients: { flour: 5, sugar: 4, eggs: 3, butter: 2 },
      price: 30,
      timeToBake: 15,
      unlockLevel: 3,
    }
  ],
  activeBakes: [],
};

export default function Home() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [activeTab, setActiveTab] = useState<'bakery' | 'shop'>('bakery');

  // Update the game state every second
  useEffect(() => {
    const timer = setInterval(() => {
      setGameState(prevState => {
        // Check for finished bakes
        const currentTime = Date.now();
        const finishedBakes = prevState.activeBakes.filter(bake => bake.finishTime <= currentTime);
        const remainingBakes = prevState.activeBakes.filter(bake => bake.finishTime > currentTime);
        
        // Calculate money and experience earned from bakes
        let moneyEarned = 0;
        let experienceEarned = 0;
        
        finishedBakes.forEach(bake => {
          const recipe = prevState.recipes.find(r => r.id === bake.recipeId);
          if (recipe) {
            moneyEarned += recipe.price;
            experienceEarned += Math.floor(recipe.price / 2);
          }
        });
        
        // Check if player leveled up
        let newExperience = prevState.experience + experienceEarned;
        let newLevel = prevState.level;
        let newExperienceToNextLevel = prevState.experienceToNextLevel;
        
        if (newExperience >= prevState.experienceToNextLevel) {
          newExperience -= prevState.experienceToNextLevel;
          newLevel += 1;
          newExperienceToNextLevel = Math.floor(prevState.experienceToNextLevel * 1.5);
        }
        
        return {
          ...prevState,
          money: prevState.money + moneyEarned,
          experience: newExperience,
          level: newLevel,
          experienceToNextLevel: newExperienceToNextLevel,
          activeBakes: remainingBakes,
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Check if player has enough ingredients to bake a recipe
  const canBake = (recipe: Recipe): boolean => {
    return Object.entries(recipe.ingredients).every(
      ([ingredient, amount]) => (gameState.inventory[ingredient] || 0) >= amount
    );
  };

  // Start baking a recipe
  const bakeRecipe = (recipe: Recipe) => {
    if (!canBake(recipe)) return;
    
    // Deduct ingredients
    const newInventory = { ...gameState.inventory };
    Object.entries(recipe.ingredients).forEach(([ingredient, amount]) => {
      newInventory[ingredient] -= amount;
    });
    
    // Add to active bakes
    const finishTime = Date.now() + recipe.timeToBake * 1000;
    
    setGameState({
      ...gameState,
      inventory: newInventory,
      activeBakes: [...gameState.activeBakes, { recipeId: recipe.id, finishTime }],
    });
  };

  // Buy ingredients from the shop
  const buyIngredient = (ingredient: string, price: number) => {
    if (gameState.money < price) return;
    
    setGameState({
      ...gameState,
      money: gameState.money - price,
      inventory: {
        ...gameState.inventory,
        [ingredient]: (gameState.inventory[ingredient] || 0) + 1,
      },
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <Head>
        <title>Bakery Game</title>
        <meta name="description" content="A fun bakery management game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center my-6">Sweet Creations Bakery</h1>
        
        {/* Game Stats */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Level: {gameState.level}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${(gameState.experience / gameState.experienceToNextLevel) * 100}%` }}
                />
              </div>
              <p className="text-sm mt-1">XP: {gameState.experience}/{gameState.experienceToNextLevel}</p>
            </div>
            <div className="text-xl font-bold text-primary">
              ${gameState.money}
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b mb-6">
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'bakery' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('bakery')}
          >
            Bakery
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'shop' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('shop')}
          >
            Shop
          </button>
        </div>
        
        {/* Bakery Tab */}
        {activeTab === 'bakery' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Recipes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {gameState.recipes
                .filter(recipe => recipe.unlockLevel <= gameState.level)
                .map(recipe => (
                  <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                    <p className="text-green-600 font-bold mb-2">Sells for: ${recipe.price}</p>
                    <p className="mb-1">Baking time: {recipe.timeToBake}s</p>
                    
                    <h4 className="font-medium mt-3 mb-2">Ingredients:</h4>
                    <ul className="mb-4">
                      {Object.entries(recipe.ingredients).map(([ingredient, amount]) => (
                        <li key={ingredient} className={gameState.inventory[ingredient] >= amount ? '' : 'text-red-500'}>
                          {ingredient}: {amount} (You have: {gameState.inventory[ingredient] || 0})
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      className={`btn ${canBake(recipe) ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'} w-full`}
                      onClick={() => canBake(recipe) && bakeRecipe(recipe)}
                      disabled={!canBake(recipe)}
                    >
                      Bake!
                    </button>
                  </div>
                ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Currently Baking</h2>
            {gameState.activeBakes.length === 0 ? (
              <p className="text-gray-500">Nothing in the oven yet!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gameState.activeBakes.map((bake, index) => {
                  const recipe = gameState.recipes.find(r => r.id === bake.recipeId);
                  const timeLeft = Math.max(0, Math.floor((bake.finishTime - Date.now()) / 1000));
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                      <h3 className="text-xl font-bold mb-2">{recipe?.name}</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div 
                          className="bg-primary h-2.5 rounded-full transition-all duration-1000" 
                          style={{ 
                            width: `${100 - (timeLeft / (recipe?.timeToBake || 1)) * 100}%` 
                          }}
                        />
                      </div>
                      <p className="text-center mt-2">
                        {timeLeft > 0 ? `${timeLeft}s remaining` : 'Ready!'}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        
        {/* Shop Tab */}
        {activeTab === 'shop' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Shop</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <h3 className="font-bold mb-1">Flour</h3>
                <p className="text-lg mb-2">$5</p>
                <p className="mb-3">You have: {gameState.inventory.flour || 0}</p>
                <button 
                  className={`btn ${gameState.money >= 5 ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'} w-full`}
                  onClick={() => gameState.money >= 5 && buyIngredient('flour', 5)}
                  disabled={gameState.money < 5}
                >
                  Buy
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <h3 className="font-bold mb-1">Sugar</h3>
                <p className="text-lg mb-2">$4</p>
                <p className="mb-3">You have: {gameState.inventory.sugar || 0}</p>
                <button 
                  className={`btn ${gameState.money >= 4 ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'} w-full`}
                  onClick={() => gameState.money >= 4 && buyIngredient('sugar', 4)}
                  disabled={gameState.money < 4}
                >
                  Buy
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <h3 className="font-bold mb-1">Eggs</h3>
                <p className="text-lg mb-2">$3</p>
                <p className="mb-3">You have: {gameState.inventory.eggs || 0}</p>
                <button 
                  className={`btn ${gameState.money >= 3 ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'} w-full`}
                  onClick={() => gameState.money >= 3 && buyIngredient('eggs', 3)}
                  disabled={gameState.money < 3}
                >
                  Buy
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <h3 className="font-bold mb-1">Butter</h3>
                <p className="text-lg mb-2">$6</p>
                <p className="mb-3">You have: {gameState.inventory.butter || 0}</p>
                <button 
                  className={`btn ${gameState.money >= 6 ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'} w-full`}
                  onClick={() => gameState.money >= 6 && buyIngredient('butter', 6)}
                  disabled={gameState.money < 6}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 