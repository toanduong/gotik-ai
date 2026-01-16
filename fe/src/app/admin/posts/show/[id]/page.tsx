"use client";

export const dynamic = 'force-dynamic';

import { useGo } from "@refinedev/core";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase";
import { Breadcrumb } from "@/components/admin/Breadcrumb";
import { Loader2, Pencil, ArrowLeft } from "lucide-react";

type Post = {
  id: number;
  title: string;
  content: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export default function ShowPost() {
  const go = useGo();
  const params = useParams();
  const postId = params?.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the post data directly from Supabase
  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const { data, error } = await supabaseClient
          .from('posts')
          .select('*')
          .eq('id', postId)
          .single();

        if (error) throw error;

        setPost(data);
        setError(null);
      } catch (error: any) {
        console.error('Error fetching post:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  // Debug logging
  console.log('Show Page - Post Data:', post);
  console.log('Show Page - Loading:', isLoading);
  console.log('Show Page - Error:', error);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[var(--admin-sky)] mx-auto mb-4" />
          <p className="text-[var(--admin-text-secondary)]">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 border border-red-200 rounded-lg bg-red-50">
        <h3 className="text-red-800 font-semibold mb-2">Error loading post</h3>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  if (!post) {
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
            { label: post.title }
          ]}
        />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
              View Post
            </h1>
            <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
              Review post details and content
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => go({ to: `/admin/posts/edit/${post.id}` })}
              className="flex items-center space-x-2 rounded-lg bg-[var(--admin-sky)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--admin-sky-dark)] shadow-sm"
            >
              <Pencil className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button
              onClick={() => go({ to: "/admin/posts" })}
              className="flex items-center space-x-2 rounded-lg border border-[var(--admin-border)] px-4 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* Post Details */}
      <div className="admin-card p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--admin-text-primary)] mb-4">
              {post.title}
            </h2>
          </div>

          <div className="flex items-center space-x-6 pb-6 border-b border-[var(--admin-border)]">
            <div>
              <p className="text-xs text-[var(--admin-text-secondary)] mb-1">Status</p>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize ${
                  post.status === "published"
                    ? "bg-[var(--admin-success)]/10 text-[var(--admin-success)]"
                    : post.status === "draft"
                    ? "bg-[var(--admin-warning)]/10 text-[var(--admin-warning)]"
                    : "bg-[var(--admin-gray-200)] text-[var(--admin-text-secondary)]"
                }`}
              >
                {post.status}
              </span>
            </div>
            <div>
              <p className="text-xs text-[var(--admin-text-secondary)] mb-1">Created</p>
              <p className="text-sm text-[var(--admin-text-primary)]">
                {new Date(post.created_at).toLocaleDateString('en-US', {
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
                {new Date(post.updated_at).toLocaleDateString('en-US', {
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
              Content
            </h3>
            <div
              className="prose prose-sm sm:prose lg:prose-lg max-w-none border border-[var(--admin-border)] rounded-md p-6 bg-[var(--admin-surface)]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
