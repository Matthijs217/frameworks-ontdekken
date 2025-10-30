import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString() ?? null;

  if (!title) {
    return new Response("Title is required", { status: 400 });
  }

  // If the user has session cookies, set the session so the insert is performed as that user
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value,
    });
  }

  const { data, error } = await supabase
    .from("supablog_posts")
    .insert([{ title, content }])
    .select();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  // Redirect back to the dashboard after creating
  return redirect("/dashboard");
};
