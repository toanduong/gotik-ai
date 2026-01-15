"use client";

import { useGo } from "@refinedev/core";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase";
import { Breadcrumb } from "@/components/admin/Breadcrumb";
import { Loader2, Pencil, ArrowLeft } from "lucide-react";

type Category = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export default function ShowCategory() {
  const go = useGo();
  const params = useParams();
  const categoryId = params?.id as string;

  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the category data directly from Supabase
  useEffect(() => {
    async function fetchCategory() {
      try {
        setIsLoading(true);
        const { data, error } = await supabaseClient
          .from('categories')
          .select('*')
          .eq('id', categoryId)
          .single();

        if (error) throw error;

        setCategory(data);
        setError(null);
      } catch (error: any) {
        console.error('Error fetching category:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[var(--admin-sky)] mx-auto mb-4" />
          <p className="text-[var(--admin-text-secondary)]">Loading category...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 border border-red-200 rounded-lg bg-red-50">
        <h3 className="text-red-800 font-semibold mb-2">Error loading category</h3>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="p-6 border border-yellow-200 rounded-lg bg-yellow-50">
        <h3 className="text-yellow-800 font-semibold mb-2">Category not found</h3>
        <p className="text-yellow-600 text-sm">The category with ID {categoryId} could not be found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Breadcrumb
          items={[
            { label: "Categories", href: "/admin/categories" },
            { label: category.name }
          ]}
        />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
              View Category
            </h1>
            <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
              Review category details
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => go({ to: `/admin/categories/edit/${category.id}` })}
              className="flex items-center space-x-2 rounded-lg bg-[var(--admin-sky)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--admin-sky-dark)] shadow-sm"
            >
              <Pencil className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button
              onClick={() => go({ to: "/admin/categories" })}
              className="flex items-center space-x-2 rounded-lg border border-[var(--admin-border)] px-4 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Details */}
      <div className="admin-card p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--admin-text-primary)] mb-4">
              {category.name}
            </h2>
          </div>

          <div className="flex items-center space-x-6 pb-6 border-b border-[var(--admin-border)]">
            <div>
              <p className="text-xs text-[var(--admin-text-secondary)] mb-1">Created</p>
              <p className="text-sm text-[var(--admin-text-primary)]">
                {new Date(category.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            <div>
              <p className="text-xs text-[var(--admin-text-secondary)] mb-1">Updated</p>
              <p className="text-sm text-[var(--admin-text-primary)]">
                {new Date(category.updated_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[var(--admin-text-primary)] mb-3">
              Description
            </h3>
            <div className="border border-[var(--admin-border)] rounded-md p-4 bg-[var(--admin-surface)]">
              <p className="text-sm text-[var(--admin-text-primary)] whitespace-pre-wrap">
                {category.description || "No description provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
