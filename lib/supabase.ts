import { createClient } from "@supabase/supabase-js";
// import { auth } from "@clerk/nextjs/server"; // Removed Clerk

export const createSupabaseClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        // TODO: Add accessToken logic for Firebase if needed
    );
}