export default function RecipesPage() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffebcd'
    }}>
      <h1 style={{ color: 'brown' }}>Recipe Selection</h1>
      
      {/* Test image section */}
      <div style={{ marginBottom: '30px', border: '2px dashed red', padding: '15px' }}>
        <h3>Test Images</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <div>
            <p>SVG Test:</p>
            <img 
              src="/images/test-circle.svg" 
              alt="Test SVG" 
              width="100"
              height="100"
            />
          </div>
          <div>
            <p>Original PNG:</p>
            <img 
              src="/images/strawberry-cake.PNG" 
              alt="Strawberry Cake PNG" 
              width="100"
              height="100"
            />
          </div>
          <div>
            <p>Lowercase PNG:</p>
            <img 
              src="/images/strawberry-cake.png" 
              alt="Strawberry Cake png" 
              width="100"
              height="100"
            />
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <div style={{ padding: '20px', backgroundColor: 'pink', borderRadius: '10px', width: '200px' }}>
          <img 
            src="/images/strawberry-cake.PNG" 
            alt="Strawberry Cake" 
            style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }}
          />
          <h2>Strawberry Cake</h2>
          <p>Delicious strawberry cake</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: 'tan', borderRadius: '10px', width: '200px' }}>
          <h2>Bread</h2>
          <p>Fresh baked bread</p>
          {/* <img 
            src="/images/bread.jpg" 
            alt="Bread" 
            style={{ width: '100%', borderRadius: '8px' }}
          /> */}
        </div>
        <div style={{ padding: '20px', backgroundColor: 'brown', color: 'white', borderRadius: '10px', width: '200px' }}>
          <h2>Chocolate Cake</h2>
          <p>Rich chocolate cake</p>
          {/* <img 
            src="/images/chocolate-cake.jpg" 
            alt="Chocolate Cake" 
            style={{ width: '100%', borderRadius: '8px' }}
          /> */}
        </div>
        <div style={{ padding: '20px', backgroundColor: 'lightpink', borderRadius: '10px', width: '200px' }}>
          <h2>Donut</h2>
          <p>Glazed donuts</p>
          {/* <img 
            src="/images/donut.jpg" 
            alt="Donut" 
            style={{ width: '100%', borderRadius: '8px' }}
          /> */}
        </div>
        <div style={{ padding: '20px', backgroundColor: 'purple', color: 'white', borderRadius: '10px', width: '200px' }}>
          <h2>Cupcake</h2>
          <p>Colorful cupcakes</p>
          {/* <img 
            src="/images/cupcake.jpg" 
            alt="Cupcake" 
            style={{ width: '100%', borderRadius: '8px' }}
          /> */}
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <a href="/" style={{ color: 'brown' }}>Go back home</a>
      </div>
    </div>
  );
} 