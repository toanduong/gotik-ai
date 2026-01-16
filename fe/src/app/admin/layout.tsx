"use client";

export const dynamic = 'force-dynamic';

import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { supabaseClient } from "@/lib/supabase";
import { authProvider } from "./providers/auth-provider";
import { Sidebar } from "@/components/admin/Sidebar";
import { Topbar } from "@/components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(supabaseClient)}
      liveProvider={liveProvider(supabaseClient)}
      authProvider={authProvider}
      resources={[
        {
          name: "posts",
          list: "/admin/posts",
          create: "/admin/posts/create",
          edit: "/admin/posts/edit/:id",
          show: "/admin/posts/show/:id",
          meta: {
            canDelete: true,
          },
        },
        {
          name: "categories",
          list: "/admin/categories",
          create: "/admin/categories/create",
          edit: "/admin/categories/edit/:id",
          show: "/admin/categories/show/:id",
          meta: {
            canDelete: true,
          },
        },
      ]}
      options={{
        syncWithLocation: true,
        warnWhenUnsavedChanges: true,
      }}
    >
      <div className="admin-layout min-h-screen">
        <Sidebar />
        <Topbar />
        <main className="ml-64 mt-16 p-6 md:p-8">{children}</main>
      </div>
    </Refine>
  );
}
