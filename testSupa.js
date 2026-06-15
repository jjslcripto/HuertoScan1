import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://himoehlftyoihvwqecou.supabase.co";
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_Wy9UDQ6DCM5iiTs_-fLm0g_qQ38bYis";
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
