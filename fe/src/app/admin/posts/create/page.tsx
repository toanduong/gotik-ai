"use client";

export const dynamic = 'force-dynamic';

import { useForm } from "@refinedev/react-hook-form";
import { useGo, useGetIdentity } from "@refinedev/core";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TiptapEditor } from "@/components/ui/tiptap-editor";
import { Breadcrumb } from "@/components/admin/Breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";

type PostFormValues = {
  title: string;
  slug: string;
  content: string;
  status: "draft" | "published";
  category_id: string;
  featured_image_url?: string;
};

type Category = {
  id: string;
  name: string;
};

export default function CreatePost() {
  const go = useGo();
  const { data: user } = useGetIdentity<{ id: string }>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoadingCategories(true);
        const { data, error } = await supabaseClient
          .from('categories')
          .select('id, name')
          .order('name', { ascending: true });

        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoadingCategories(false);
      }
    }

    fetchCategories();
  }, []);

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PostFormValues>({
    refineCoreProps: {
      redirect: "list",
    },
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      status: "draft",
      category_id: "none",
      featured_image_url: "",
    },
  });

  const status = watch("status");
  const content = watch("content");
  const categoryId = watch("category_id");
  const title = watch("title");

  // Slug generation logic
  useEffect(() => {
    const generateSlug = (text: string) => {
      return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    };

    if (title) {
      const slug = generateSlug(title);
      setValue("slug", slug, { shouldValidate: true });
    }
  }, [title, setValue]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Breadcrumb
          items={[
            { label: "Posts", href: "/admin/posts" },
            { label: "Create Post" }
          ]}
        />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
              Create Post
            </h1>
            <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
              Write and publish new content
            </p>
          </div>
          <button
            onClick={() => go({ to: "/admin/posts" })}
            className="flex items-center space-x-2 rounded-lg border border-[var(--admin-border)] px-4 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await onFinish({
              ...data,
              category_id: (data.category_id === "none" || !data.category_id) ? null : data.category_id,
              author_id: user?.id,
            } as any);
          } catch (error) {
            console.error("Form submission error:", error);
          }
        })}
        className="space-y-6"
      >
        <div className="admin-card p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium text-[var(--admin-text-primary)]">
                Title <span className="text-[var(--admin-error)]">*</span>
              </Label>
              <Input
                id="title"
                {...register("title", {
                  required: "Title is required",
                })}
                placeholder="Enter post title"
                className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20"
              />
              {errors.title?.message && (
                <p className="text-sm text-[var(--admin-error)] flex items-center mt-1">
                  {String(errors.title.message)}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="slug" className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Slug <span className="text-[var(--admin-error)]">*</span>
                </Label>
                <Input
                  id="slug"
                  {...register("slug", {
                    required: "Slug is required",
                  })}
                  placeholder="post-url-slug"
                  className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20"
                />
                {errors.slug?.message && (
                  <p className="text-sm text-[var(--admin-error)] mt-1">
                    {String(errors.slug.message)}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="featured_image_url" className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Featured Image URL
                </Label>
                <Input
                  id="featured_image_url"
                  {...register("featured_image_url")}
                  placeholder="https://example.com/image.jpg"
                  className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category_id" className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Category
                </Label>
                <Select
                  value={categoryId}
                  onValueChange={(value) => setValue("category_id", value)}
                  disabled={isLoadingCategories}
                >
                  <SelectTrigger className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20">
                    <SelectValue placeholder={isLoadingCategories ? "Loading categories..." : "Select category"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No category</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={String(category.id)}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category_id?.message && (
                  <p className="text-sm text-[var(--admin-error)] mt-1">
                    {String(errors.category_id.message)}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="status" className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Status
                </Label>
                <Select
                  value={status}
                  onValueChange={(value) => setValue("status", value)}
                >
                  <SelectTrigger className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
                {errors.status?.message && (
                  <p className="text-sm text-[var(--admin-error)] mt-1">
                    {String(errors.status.message)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="admin-card p-6">
          <div className="space-y-2">
            <Label htmlFor="content" className="text-sm font-medium text-[var(--admin-text-primary)]">
              Content <span className="text-[var(--admin-error)]">*</span>
            </Label>
            <TiptapEditor
              value={content || ""}
              onChange={(value) => {
                setValue("content", value);
                // Trigger validation for content
                if (value && value !== "<p></p>") {
                  setValue("content", value, { shouldValidate: true });
                }
              }}
              placeholder="Start writing your post content..."
            />
            <input
              type="hidden"
              {...register("content", {
                required: "Content is required",
                validate: (value) => {
                  if (!value || value === "<p></p>") return "Content is required";
                  return true;
                }
              })}
            />
            {errors.content?.message && (
              <p className="text-sm text-[var(--admin-error)] mt-1">
                {String(errors.content.message)}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={() => go({ to: "/admin/posts" })}
            className="rounded-lg border border-[var(--admin-border)] px-4 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)]"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center space-x-2 rounded-lg bg-[var(--admin-sky)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--admin-sky-dark)] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <Save className="h-4 w-4" />
            <span>{isSubmitting ? "Creating..." : "Create Post"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
