// Initialize Supabase client
// You'll need to replace these with your own Supabase URL and anon key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
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