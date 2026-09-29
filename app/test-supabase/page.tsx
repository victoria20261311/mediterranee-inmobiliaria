"use client";

import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function TestSupabasePage() {
  useEffect(() => {
    async function probarSupabase() {
      const { data, error } = await supabase
        .from("propiedades")
        .select("*")
        .limit(5);

      console.log("DATOS SUPABASE:", data);
      console.log("ERROR SUPABASE:", error);
    }

    probarSupabase();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">
          Prueba de conexión con Supabase
        </h1>

        <p className="mt-2 text-gray-600">
          Revisá la consola del navegador para ver el resultado.
        </p>
      </div>
    </main>
  );
}
