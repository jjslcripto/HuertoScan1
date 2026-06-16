import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const url = ("https://klaompnbmjufvhjkeeno.supabase.co").replace(/\/rest\/v1\/?$/, '');
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYW9tcG5ibWp1ZnZoamtlZW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NjY5ODEsImV4cCI6MjA5NzE0Mjk4MX0.udKgeFZLsVzXvSU0oqR0F3_J7EDCA1g7MxF00l8LEEc";
const supabase = createClient(url, key);

async function test() {
  const newCrop = {
    id: "test-" + Date.now(),
    name: "Test Name",
  };
  const { data, error } = await supabase.from('crops').insert([newCrop]).select();
  console.log("Error:", JSON.stringify(error, null, 2));
  console.log("Data:", data);
}
test();
