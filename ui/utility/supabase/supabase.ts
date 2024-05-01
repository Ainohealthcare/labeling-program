import { createClient } from "./server";
import { cookies } from "next/headers";

const cookieStore = cookies();
export const supabase = createClient(cookieStore);
