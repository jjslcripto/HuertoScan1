import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const url = (process.env.VITE_SUPABASE_URL || "https://himoehlftyoihvwqecou.supabase.co").replace(/\/rest\/v1\/?$/, '');
const key = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_Wy9UDQ6DCM5iiTs_-fLm0g_qQ38bYis";
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
