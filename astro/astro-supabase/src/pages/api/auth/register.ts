// With `output: 'static'` configured:
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";


export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  // DEBUG: log env & input
  console.log("SUPABASE_URL present:", Boolean(import.meta.env.SUPABASE_URL));
  console.log("SUPABASE_ANON_KEY present:", Boolean(import.meta.env.SUPABASE_ANON_KEY));
  console.log("Register attempt for:", email);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    // log the full error to the server console
    console.error("supabase.signUp error:", error);
    // return a clearer message while debugging
    return new Response(error.message ?? "Sign up error", { status: 500 });
  }

  return redirect("/signin");
};