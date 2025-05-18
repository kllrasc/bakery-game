export default function ImageTest() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Image Test Page</h1>
      
      <div style={{ marginTop: '20px' }}>
        <h2>SVG Test</h2>
        <img 
          src="/images/test-circle.svg" 
          alt="Test SVG" 
          width="100" 
          height="100"
          style={{ border: '1px solid black' }}
        />
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>External Image Test</h2>
        <img 
          src="https://placehold.co/200" 
          alt="External Test" 
          width="100" 
          height="100"
          style={{ border: '1px solid black' }}
        />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <a href="/" style={{ color: 'blue' }}>Back to Home</a>
      </div>
    </div>
  );
} 