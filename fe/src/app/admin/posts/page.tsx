"use client";

import { useTable } from "@refinedev/core";
import { useGo } from "@refinedev/core";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/admin/Breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
  Filter,
  Loader2,
} from "lucide-react";

type Post = {
  id: number;
  title: string;
  content: string;
  status: string;
  created_at: string;
};

export default function PostsList() {
  const go = useGo();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField, setSortField] = useState<keyof Post>("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const { tableQuery, current, setCurrent, pageCount } = useTable<Post>({
    resource: "posts",
  });

  const posts = tableQuery?.data?.data || [];
  const isLoading = tableQuery?.isLoading;

  // Filter and sort posts
  const filteredPosts = posts
    .filter((post: Post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || post.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a: Post, b: Post) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const multiplier = sortOrder === "asc" ? 1 : -1;
      return aVal > bVal ? multiplier : -multiplier;
    });

  const handleSort = (field: keyof Post) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[var(--admin-sky)] mx-auto mb-4" />
          <p className="text-[var(--admin-text-secondary)]">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Breadcrumb items={[{ label: "Posts" }]} />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
              Posts
            </h1>
            <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
              Manage and organize your blog posts
            </p>
          </div>
          <button
            onClick={() => go({ to: "/admin/posts/create" })}
            className="flex items-center space-x-2 rounded-lg bg-[var(--admin-sky)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--admin-sky-dark)] shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Create Post</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-card p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--admin-text-muted)]" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-[var(--admin-text-muted)]" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px] border-[var(--admin-border)]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="admin-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--admin-border)] hover:bg-transparent">
              <TableHead className="w-[80px] text-[var(--admin-text-secondary)] font-semibold">
                <button
                  onClick={() => handleSort("id")}
                  className="flex items-center space-x-1 hover:text-[var(--admin-text-primary)]"
                >
                  <span>ID</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[var(--admin-text-secondary)] font-semibold">
                <button
                  onClick={() => handleSort("title")}
                  className="flex items-center space-x-1 hover:text-[var(--admin-text-primary)]"
                >
                  <span>Title</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[var(--admin-text-secondary)] font-semibold">
                <button
                  onClick={() => handleSort("status")}
                  className="flex items-center space-x-1 hover:text-[var(--admin-text-primary)]"
                >
                  <span>Status</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[var(--admin-text-secondary)] font-semibold">
                <button
                  onClick={() => handleSort("created_at")}
                  className="flex items-center space-x-1 hover:text-[var(--admin-text-primary)]"
                >
                  <span>Created At</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[var(--admin-text-secondary)] font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length ? (
              filteredPosts.map((post: Post) => (
                <TableRow
                  key={post.id}
                  className="border-[var(--admin-border)] hover:bg-[var(--admin-surface-hover)]"
                >
                  <TableCell className="font-medium text-[var(--admin-text-primary)]">
                    #{post.id}
                  </TableCell>
                  <TableCell className="font-medium text-[var(--admin-text-primary)]">
                    {post.title}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                        post.status === "published"
                          ? "bg-[var(--admin-success)]/10 text-[var(--admin-success)]"
                          : post.status === "draft"
                          ? "bg-[var(--admin-warning)]/10 text-[var(--admin-warning)]"
                          : "bg-[var(--admin-gray-200)] text-[var(--admin-text-secondary)]"
                      }`}
                    >
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-[var(--admin-text-secondary)]">
                    {new Date(post.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => go({ to: `/admin/posts/show/${post.id}` })}
                        className="rounded-md p-2 text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] hover:text-[var(--admin-text-primary)]"
                        title="View"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => go({ to: `/admin/posts/edit/${post.id}` })}
                        className="rounded-md p-2 text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] hover:text-[var(--admin-sky)]"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded-md p-2 text-[var(--admin-text-secondary)] transition-colors hover:bg-red-50 hover:text-[var(--admin-error)]"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-[var(--admin-text-muted)]"
                >
                  No posts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--admin-text-secondary)]">
          Showing {filteredPosts.length} of {posts.length} posts
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrent(current - 1)}
            disabled={current === 1}
            className="rounded-lg border border-[var(--admin-border)] px-3 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div className="flex items-center space-x-1">
            {[...Array(Math.min(pageCount, 5))].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i + 1)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  current === i + 1
                    ? "bg-[var(--admin-sky)] text-white"
                    : "text-[var(--admin-text-secondary)] hover:bg-[var(--admin-surface-hover)]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrent(current + 1)}
            disabled={current === pageCount}
            className="rounded-lg border border-[var(--admin-border)] px-3 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
