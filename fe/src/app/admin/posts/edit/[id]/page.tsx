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
  content: string;
  status: string;
};

export default function EditPost() {
  const go = useGo();
  const params = useParams();
  const postId = params?.id as string;

  const [post, setPost] = useState<PostFormValues | null>(null);
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

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
  const content = watch("content");
  const postTitle = watch("title");

  // Debug logging
  console.log('Edit Form - Post Data:', post);
  console.log('Edit Form - Loading:', isLoadingPost);
  console.log('Edit Form - Error:', fetchError);
  console.log('Edit Form - Current Content Value:', content);

  // Populate form with data once loaded
  useEffect(() => {
    if (post) {
      console.log('Resetting form with data:', post);
      reset({
        title: post.title,
        content: post.content,
        status: post.status,
      });
      // Force set the content for the editor
      setValue("content", post.content);
    }
  }, [post, reset, setValue]);

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
      <form onSubmit={handleSubmit(onFinish)} className="space-y-6">
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
                  <SelectItem value="archived">Archived</SelectItem>
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
