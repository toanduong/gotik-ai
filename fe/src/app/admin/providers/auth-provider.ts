import type { AuthProvider } from "@refinedev/core";
import { supabaseClient } from "@/lib/supabase";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error,
      };
    }

    if (data?.user) {
      return {
        success: true,
        redirectTo: "/admin",
      };
    }

    return {
      success: false,
      error: {
        message: "Login failed",
        name: "Invalid email or password",
      },
    };
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
      redirectTo: "/admin/login",
    };
  },
  check: async () => {
    const { data } = await supabaseClient.auth.getSession();
    const { session } = data;

    if (!session) {
      return {
        authenticated: false,
        redirectTo: "/admin/login",
      };
    }

    return {
      authenticated: true,
    };
  },
  getPermissions: async () => {
    const { data } = await supabaseClient.auth.getUser();

    if (data?.user) {
      return data.user.role;
    }

    return null;
  },
  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser();

    if (data?.user) {
      return {
        id: data.user.id,
        name: data.user.user_metadata.full_name || data.user.email,
        email: data.user.email,
        avatar: data.user.user_metadata.avatar_url,
      };
    }

    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
