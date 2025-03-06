import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  User as SupabaseUser,
} from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

// Initialize Supabase client
// Define user type
interface User {
  id: string;
  email: string;
}

// Define Zustand store interface
interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

// Function to safely extract user data
const mapUser = (user: SupabaseUser | null | undefined): User | null => {
  if (!user) return null; // Ensure function returns null explicitly
  return { id: user.id, email: user.email ?? "" };
};

// Create Zustand store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      // Login function
      login: async (email, password) => {
        set({ loading: true, error: null });
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          set({ error: error.message, loading: false });
        } else {
          set({ user: mapUser(data.user), loading: false });
        }
      },

      // Signup function
      signup: async (email, password) => {
        set({ loading: true, error: null });
        const { data, error } = await supabase.auth.signUp({ email, password });
        console.log(data,"data after signup")
        if (error) {
          set({ error: error.message, loading: false });
        } else {
          set({ user: mapUser(data.user), loading: false });
        }
      },

      // Logout function
      logout: async () => {
        await supabase.auth.signOut();
        set({ user: null });
      },

      // Check session on app load
      checkSession: async () => {
        const { data } = await supabase.auth.getSession();
        set({ user: mapUser(data.session?.user) });
      },
    }),
    { name: "auth-storage" } // Persist in localStorage
  )
);

// Run checkSession on app start
useAuthStore.getState().checkSession();
