import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Define recipe data
const recipes = [
  {
    id: 'strawberry-cake',
    name: 'Strawberry Cake',
    description: 'A delicious cake with fresh strawberries',
  },
  {
    id: 'bread',
    name: 'Bread',
    description: 'Freshly baked bread with a crispy crust',
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake',
  },
  {
    id: 'donut',
    name: 'Donut',
    description: 'Sweet glazed donuts that melt in your mouth',
  },
  {
    id: 'cupcake',
    name: 'Cupcake',
    description: 'Tasty cupcakes with colorful frosting',
  },
];

export default function Recipes() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#FFFFFF' }}>
      <Head>
        <title>Select Recipe - Bakery Game</title>
        <meta name="description" content="Select a recipe to bake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div>
            <Link href="/" style={{ color: '#FF9F1C', textDecoration: 'none' }}>
              ← Back to Home
            </Link>
          </div>
          <h1 style={{ color: '#FF9F1C', fontSize: '2.5rem', fontWeight: 'bold', marginTop: '1rem' }}>Choose a Recipe to Bake</h1>
          <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '0.5rem' }}>What would you like to bake today?</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              style={{ 
                backgroundColor: '#f9f9f9', 
                borderRadius: '0.5rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: '2px solid #FFBF69'
              }}
            >
              <h2 style={{ color: '#FF9F1C', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{recipe.name}</h2>
              <p style={{ color: '#333', marginBottom: '1rem' }}>{recipe.description}</p>
              <button 
                style={{ 
                  backgroundColor: '#FF9F1C', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '0.375rem', 
                  width: '100%',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 