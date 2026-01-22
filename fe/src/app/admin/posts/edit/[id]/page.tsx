"use client";

export const dynamic = 'force-dynamic';

import { useForm } from "@refinedev/react-hook-form";
import { useGo } from "@refinedev/core";
import { useParams } from "next/navigation";
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
import { ArrowLeft, Save, Loader2 } from "lucide-react";

type PostFormValues = {
  title: string;
  slug: string;
  content: string;
  status: "draft" | "published";
  locale: "en" | "vi";
  category_id: string;
  featured_image_url?: string;
  author_id?: string;
};

type Category = {
  id: string;
  name: string;
};

export default function EditPost() {
  const go = useGo();
  const params = useParams();
  const postId = params?.id as string;

  const [post, setPost] = useState<PostFormValues | null>(null);
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
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

  // Fetch the post data directly from Supabase
  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoadingPost(true);
        const { data, error } = await supabaseClient
          .from('posts')
          .select('*')
          .eq('id', postId)
          .single();

        if (error) throw error;

        setPost(data);
        setFetchError(null);
      } catch (error: any) {
        console.error('Error fetching post:', error);
        setFetchError(error.message);
      } finally {
        setIsLoadingPost(false);
      }
    }

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostFormValues>({
    refineCoreProps: {
      action: "edit",
      resource: "posts",
      id: postId,
      redirect: "list",
    },
  });

  const status = watch("status");
  const locale = watch("locale");
  const content = watch("content");
  const postTitle = watch("title");
  const categoryId = watch("category_id");

  // Populate form with data once loaded
  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        slug: post.slug,
        content: post.content,
        status: post.status as any,
        locale: post.locale || "en", // Default to 'en' if null
        category_id: post.category_id ? String(post.category_id) : "none",
        featured_image_url: post.featured_image_url || "",
        author_id: post.author_id,
      });
      // Force set the content for the editor
      setValue("content", post.content);
    }
  }, [post, reset, setValue]);

  const title = watch("title");

  // Slug generation logic (optional for edit, but keeping it consistent with create)
  useEffect(() => {
    const generateSlug = (text: string) => {
      return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    };

    if (title && !post?.slug) { // Only auto-generate if there was no slug before
      const slug = generateSlug(title);
      setValue("slug", slug, { shouldValidate: true });
    }
  }, [title, setValue, post?.slug]);

  if (isLoadingPost) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[var(--admin-sky)] mx-auto mb-4" />
          <p className="text-[var(--admin-text-secondary)]">Loading post...</p>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="p-6 border border-red-200 rounded-lg bg-red-50">
        <h3 className="text-red-800 font-semibold mb-2">Error loading post</h3>
        <p className="text-red-600 text-sm">{fetchError}</p>
      </div>
    );
  }

  if (!isLoadingPost && !post) {
    return (
      <div className="p-6 border border-yellow-200 rounded-lg bg-yellow-50">
        <h3 className="text-yellow-800 font-semibold mb-2">Post not found</h3>
        <p className="text-yellow-600 text-sm">The post with ID {postId} could not be found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Breadcrumb
          items={[
            { label: "Posts", href: "/admin/posts" },
            { label: postTitle || "Edit Post" }
          ]}
        />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
              Edit Post
            </h1>
            <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
              Update and modify your post content
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
            } as any);
          } catch (error) {
            console.error("Update error:", error);
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
                  <p className="text-sm text-[var(--admin-error)] flex items-center mt-1">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="locale" className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Locale
                </Label>
                <Select
                  value={locale}
                  onValueChange={(value) => setValue("locale", value as "en" | "vi")}
                >
                  <SelectTrigger className="border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20">
                    <SelectValue placeholder="Select locale" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English (en)</SelectItem>
                    <SelectItem value="vi">Vietnamese (vi)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.locale?.message && (
                  <p className="text-sm text-[var(--admin-error)] mt-1">
                    {String(errors.locale.message)}
                  </p>
                )}
              </div>

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
              onChange={(value) => setValue("content", value)}
              placeholder="Start writing your post content..."
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
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Updating...</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Update Post</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
