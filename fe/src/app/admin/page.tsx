"use client";

import { useState, useEffect } from "react";
import { FileText, FolderOpen, TrendingUp, Activity, Clock, Loader2 } from "lucide-react";
import { Breadcrumb } from "@/components/admin/Breadcrumb";
import { supabaseClient } from "@/lib/supabase";

type RecentPost = {
  id: number;
  title: string;
  status: string;
  created_at: string;
};

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [postsCount, setPostsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [publishedCount, setPublishedCount] = useState(0);
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);

  // Fetch dashboard data
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setIsLoading(true);

        // Fetch posts count
        const { count: posts } = await supabaseClient
          .from('posts')
          .select('*', { count: 'exact', head: true });

        // Fetch categories count
        const { count: categories } = await supabaseClient
          .from('categories')
          .select('*', { count: 'exact', head: true });

        // Fetch published posts count
        const { count: published } = await supabaseClient
          .from('posts')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'published');

        // Fetch recent posts
        const { data: recent } = await supabaseClient
          .from('posts')
          .select('id, title, status, created_at')
          .order('created_at', { ascending: false })
          .limit(4);

        setPostsCount(posts || 0);
        setCategoriesCount(categories || 0);
        setPublishedCount(published || 0);
        setRecentPosts(recent || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const stats = [
    {
      name: "Total Posts",
      value: postsCount.toString(),
      change: "+12%",
      trend: "up",
      icon: FileText,
    },
    {
      name: "Categories",
      value: categoriesCount.toString(),
      change: "+4%",
      trend: "up",
      icon: FolderOpen,
    },
    {
      name: "Published Posts",
      value: publishedCount.toString(),
      change: "+8%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      name: "Page Views",
      value: "12.5K",
      change: "+23%",
      trend: "up",
      icon: Activity,
    },
  ];

  // Format relative time for recent posts
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMins < 60) return `${diffInMins} ${diffInMins === 1 ? 'minute' : 'minutes'} ago`;
    if (diffInHours < 24) return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    if (diffInDays < 30) return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    return date.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[var(--admin-sky)] mx-auto mb-4" />
          <p className="text-[var(--admin-text-secondary)]">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Breadcrumb items={[{ label: "Dashboard" }]} />
        <div>
          <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
            Dashboard
          </h1>
          <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
            Welcome back! Here's what's happening with your CMS.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="admin-card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[var(--admin-text-secondary)]">
                  {stat.name}
                </p>
                <p className="mt-2 text-3xl font-semibold text-[var(--admin-text-primary)]">
                  {stat.value}
                </p>
                <p className="mt-2 flex items-center text-sm">
                  <TrendingUp className="mr-1 h-4 w-4 text-[var(--admin-success)]" />
                  <span className="font-medium text-[var(--admin-success)]">
                    {stat.change}
                  </span>
                  <span className="ml-1 text-[var(--admin-text-muted)]">
                    from last month
                  </span>
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--admin-sky)]/10">
                <stat.icon className="h-6 w-6 text-[var(--admin-sky)]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Posts */}
        <div className="admin-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[var(--admin-text-primary)]">
              Recent Posts
            </h2>
            <a
              href="/admin/posts"
              className="text-sm font-medium text-[var(--admin-sky)] hover:text-[var(--admin-sky-dark)]"
            >
              View all
            </a>
          </div>
          <div className="space-y-3">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/admin/posts/show/${post.id}`}
                  className="flex items-center justify-between rounded-lg border border-[var(--admin-border)] p-3 transition-colors hover:bg-[var(--admin-surface-hover)] cursor-pointer"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--admin-text-primary)]">
                      {post.title}
                    </p>
                    <p className="mt-1 flex items-center text-xs text-[var(--admin-text-muted)]">
                      <Clock className="mr-1 h-3 w-3" />
                      {getRelativeTime(post.created_at)}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                      post.status === "published"
                        ? "bg-[var(--admin-success)]/10 text-[var(--admin-success)]"
                        : post.status === "draft"
                        ? "bg-[var(--admin-warning)]/10 text-[var(--admin-warning)]"
                        : "bg-[var(--admin-gray-200)] text-[var(--admin-text-secondary)]"
                    }`}
                  >
                    {post.status}
                  </span>
                </a>
              ))
            ) : (
              <div className="text-center py-8 text-[var(--admin-text-muted)]">
                <p className="text-sm">No recent posts</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="admin-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-[var(--admin-text-primary)]">
            Quick Actions
          </h2>
          <div className="space-y-2">
            <a
              href="/admin/posts/create"
              className="flex items-center rounded-lg border border-[var(--admin-border)] p-4 transition-all hover:border-[var(--admin-sky)] hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--admin-sky)]/10">
                <FileText className="h-5 w-5 text-[var(--admin-sky)]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Create New Post
                </p>
                <p className="text-xs text-[var(--admin-text-muted)]">
                  Write and publish content
                </p>
              </div>
            </a>
            <a
              href="/admin/categories/create"
              className="flex items-center rounded-lg border border-[var(--admin-border)] p-4 transition-all hover:border-[var(--admin-sky)] hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--admin-navy)]/10">
                <FolderOpen className="h-5 w-5 text-[var(--admin-navy)]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Add Category
                </p>
                <p className="text-xs text-[var(--admin-text-muted)]">
                  Organize your content
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
