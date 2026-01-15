"use client";

import { useForm } from "@refinedev/react-hook-form";
import { useGo, useOne } from "@refinedev/core";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Breadcrumb } from "@/components/admin/Breadcrumb";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

type CategoryFormValues = {
  name: string;
  description: string;
};

export default function EditCategory() {
  const go = useGo();
  const params = useParams();
  const categoryId = params?.id as string;

  const [category, setCategory] = useState<CategoryFormValues | null>(null);
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Fetch the category data directly from Supabase
  useEffect(() => {
    async function fetchCategory() {
      try {
        setIsLoadingCategory(true);
        const { data, error } = await supabaseClient
          .from('categories')
          .select('*')
          .eq('id', categoryId)
          .single();

        if (error) throw error;

        setCategory(data);
        setFetchError(null);
      } catch (error: any) {
        console.error('Error fetching category:', error);
        setFetchError(error.message);
      } finally {
        setIsLoadingCategory(false);
      }
    }

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormValues>({
    refineCoreProps: {
      action: "edit",
      resource: "categories",
      id: categoryId,
      redirect: "list",
    },
  });

  const categoryName = watch("name");

  // Populate form with data once loaded
  useEffect(() => {
    if (category) {
      reset({
        name: category.name,
        description: category.description,
      });
    }
  }, [category, reset]);

  if (isLoadingCategory) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[var(--admin-sky)] mx-auto mb-4" />
          <p className="text-[var(--admin-text-secondary)]">Loading category...</p>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="p-6 border border-red-200 rounded-lg bg-red-50">
        <h3 className="text-red-800 font-semibold mb-2">Error loading category</h3>
        <p className="text-red-600 text-sm">{fetchError}</p>
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
            { label: categoryName || "Edit Category" }
          ]}
        />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
              Edit Category
            </h1>
            <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
              Update category information
            </p>
          </div>
          <button
            onClick={() => go({ to: "/admin/categories" })}
            className="flex items-center space-x-2 rounded-lg border border-[var(--admin-border)] px-4 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onFinish)} className="space-y-6">
        <div className="admin-card p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-[var(--admin-text-primary)]">
                Name <span className="text-[var(--admin-error)]">*</span>
              </Label>
              <Input
                id="name"
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Enter category name"
                className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20"
              />
              {errors.name && (
                <p className="text-sm text-[var(--admin-error)] mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium text-[var(--admin-text-primary)]">
                Description
              </Label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="Enter category description"
                rows={5}
                className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20"
              />
              {errors.description && (
                <p className="text-sm text-[var(--admin-error)] mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={() => go({ to: "/admin/categories" })}
            className="rounded-lg border border-[var(--admin-border)] px-4 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)]"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center space-x-2 rounded-lg bg-[var(--admin-sky)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--admin-sky-dark)] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Updating...</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Update Category</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
