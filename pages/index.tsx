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
      backgroundColor: '#FFFFFF'
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
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#FF9F1C',
          marginBottom: '1rem'
        }}>
          Bakery Game
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#555',
          marginTop: '1rem'
        }}>
          Bake delicious treats and grow your bakery business
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/recipes" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#FF9F1C',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              fontSize: '1.125rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Start Baking
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
} 