import { createClient } from "@supabase/supabase-js";
import ENV from "../env";

const supabaseUrl = ENV.Project_URL;
const supabaseAnonKey = ENV.ANON_PUBLIC;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
