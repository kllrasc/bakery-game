export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        color: '#FF9F1C', 
        fontSize: '50px',
        marginBottom: '20px'
      }}>
        Bakery Game
      </h1>
      
      <p style={{
        fontSize: '20px',
        color: '#555',
        maxWidth: '600px',
        marginBottom: '40px'
      }}>
        Bake delicious treats and grow your bakery business
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <a 
          href="/recipes" 
          style={{
            backgroundColor: '#FF9F1C',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 30px',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          Start Baking
        </a>
        
        <a 
          href="/test" 
          style={{
            color: '#555',
            textDecoration: 'underline',
            marginTop: '10px'
          }}
        >
          Test Page
        </a>
        
        <a 
          href="/image-test" 
          style={{
            color: '#555',
            textDecoration: 'underline',
            marginTop: '10px'
          }}
        >
          Image Test
        </a>
      </div>
    </div>
  );
} 