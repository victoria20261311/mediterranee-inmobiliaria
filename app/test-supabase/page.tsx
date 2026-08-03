import { createClient } from "@supabase/supabase-js";

export default async function Test() {
  const supabase = createClient(
    "https://axrbawejnwyqmaqmplkk.supabase.co",
    "sb_publishable_OlAOpzhshloCZHuQLyxANg_mVgE54ZJ",
    {
      db: {
        schema: "public",
      },
    }
  );

  const respuesta = await supabase
    .from("propiedades")
    .select("*");


    console.log("DATOS SUPABASE:", data);
console.log("ERROR SUPABASE:", error);


  return (
    <pre>{JSON.stringify(respuesta, null, 2)}</pre>
  );
}