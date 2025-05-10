import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/cupcake.png")',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Head>
        <title>Bakery Game</title>
        <meta name="description" content="A fun bakery management game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '800px',
        padding: '3rem',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#FF9F1C',
          marginBottom: '1.5rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          Bakery Game
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#555',
          marginTop: '1rem',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}>
          Bake delicious treats and grow your bakery business
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Link href="/recipes" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#FF9F1C',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(255, 159, 28, 0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              Start Baking
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
} 