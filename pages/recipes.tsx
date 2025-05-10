import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Define recipe data
const recipes = [
  {
    id: 'strawberry-cake',
    name: 'Strawberry Cake',
    description: 'A delicious cake with fresh strawberries',
    color: '#FFD6E0'
  },
  {
    id: 'bread',
    name: 'Bread',
    description: 'Freshly baked bread with a crispy crust',
    color: '#FFEACC'
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake',
    color: '#E6CCB3'
  },
  {
    id: 'donut',
    name: 'Donut',
    description: 'Sweet glazed donuts that melt in your mouth',
    color: '#FFD6D6'
  },
  {
    id: 'cupcake',
    name: 'Cupcake',
    description: 'Tasty cupcakes with colorful frosting',
    color: '#E6CCFF'
  },
];

export default function RecipesPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem', 
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Head>
        <title>Recipe Selection - Bakery Game</title>
        <meta name="description" content="Select a recipe to bake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <Link href="/" style={{ 
            color: '#FF9F1C', 
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            ← Back to Home
          </Link>
        </nav>

        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            color: '#FF9F1C', 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Choose Your Recipe
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Select a delicious treat to bake in your bakery
          </p>
        </header>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {recipes.map((recipe) => (
            <div key={recipe.id} style={{ 
              backgroundColor: recipe.color,
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease',
              cursor: 'pointer',
              border: '2px solid #FFBF69',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{ 
                color: '#333',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem'
              }}>
                {recipe.name}
              </h2>
              <p style={{ 
                color: '#555',
                marginBottom: '1.5rem',
                flex: 1
              }}>
                {recipe.description}
              </p>
              <button style={{
                backgroundColor: '#FF9F1C',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '0.75rem 1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}>
                Select Recipe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 