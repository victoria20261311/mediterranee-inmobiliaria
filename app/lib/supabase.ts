import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://axrbawejnwyqmaqmplkk.supabase.co";


const supabaseKey = "sb_publishable_OlAOpzhshloCZHuQLyxANg_mVgE54ZJ";


export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);