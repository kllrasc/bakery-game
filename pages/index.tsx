import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <Head>
        <title>Bakery Game</title>
        <meta name="description" content="A fun bakery management game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
          Bakery Game
        </h1>
        <p className="text-xl text-gray-700 mt-4">
          Bake delicious treats and grow your bakery business
        </p>
        <div className="mt-8">
          <button className="btn btn-primary text-lg px-8 py-3">
            Start Baking
          </button>
        </div>
      </main>
    </div>
  );
} 