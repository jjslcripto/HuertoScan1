import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://klaompnbmjufvhjkeeno.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYW9tcG5ibWp1ZnZoamtlZW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NjY5ODEsImV4cCI6MjA5NzE0Mjk4MX0.udKgeFZLsVzXvSU0oqR0F3_J7EDCA1g7MxF00l8LEEc";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data, error } = await supabase.from('crops').select('*').limit(1);
  console.log("Crops Data:", JSON.stringify(data));
  console.log("Crops Error:", JSON.stringify(error));
  
  const insertMock = { id: `crop-${Date.now()}` };
  const res = await supabase.from('crops').insert([insertMock]).select();
  console.log("Insert response:", JSON.stringify(res));
}

test();
