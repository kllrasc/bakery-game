import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Define recipe data
const recipes = [
  {
    id: 'strawberry-cake',
    name: 'Strawberry Cake',
    description: 'A delicious cake with fresh strawberries',
    color: 'bg-pink-100',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-300',
  },
  {
    id: 'bread',
    name: 'Bread',
    description: 'Freshly baked bread with a crispy crust',
    color: 'bg-amber-100',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-300',
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake',
    color: 'bg-brown-100',
    textColor: 'text-amber-900',
    borderColor: 'border-amber-700',
  },
  {
    id: 'donut',
    name: 'Donut',
    description: 'Sweet glazed donuts that melt in your mouth',
    color: 'bg-rose-100',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-300',
  },
  {
    id: 'cupcake',
    name: 'Cupcake',
    description: 'Tasty cupcakes with colorful frosting',
    color: 'bg-purple-100',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-300',
  },
];

export default function Recipes() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Head>
        <title>Select Recipe - Bakery Game</title>
        <meta name="description" content="Select a recipe to bake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <Link href="/" className="text-primary hover:text-primary/80">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Choose a Recipe to Bake</h1>
          <p className="text-xl text-gray-600 mt-2">What would you like to bake today?</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              className={`rounded-lg shadow-md p-6 border-2 ${recipe.borderColor} ${recipe.color} transition-transform hover:scale-105 cursor-pointer`}
            >
              <h2 className={`text-2xl font-bold mb-2 ${recipe.textColor}`}>{recipe.name}</h2>
              <p className="text-gray-700 mb-4">{recipe.description}</p>
              <button className="btn btn-primary w-full">Select</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 