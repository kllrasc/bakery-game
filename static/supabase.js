// Initialize Supabase client
// Connection to your Supabase project
const supabaseUrl = 'https://cxsmusbbgiiiywalaord.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4c211c2JiZ2lpaXl3YWxhb3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0ODMxMzYsImV4cCI6MjA2MjA1OTEzNn0.gCoz5Bb46Pdha2eR3WO5KgxnstZIzRn0-RSjwSwQbi0';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Function to get image URLs from Supabase Storage
async function getImageUrl(imageName) {
  try {
    const { data, error } = await supabase
      .storage
      .from('bakery-images') // Replace with your bucket name
      .getPublicUrl(imageName);
    
    if (error) {
      console.error('Error getting image:', error);
      return null;
    }
    
    return data.publicUrl;
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}

// Load images when the page is ready
document.addEventListener('DOMContentLoaded', async () => {
  // For recipe cards that have data-image attributes
  const recipeImages = document.querySelectorAll('[data-image]');
  
  for (const img of recipeImages) {
    const imageName = img.getAttribute('data-image');
    const imageUrl = await getImageUrl(imageName);
    
    if (imageUrl) {
      img.src = imageUrl;
    } else {
      // Fallback to placeholder if Supabase image fails
      const altText = img.getAttribute('alt') || 'Recipe Image';
      img.src = `https://placehold.co/400x300/ffb6c1/333?text=${altText.replace(' ', '+')}`;
    }
  }
}); 