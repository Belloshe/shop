
import supabase from './supabase';

export async function fetch(category) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category);

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data;
}
