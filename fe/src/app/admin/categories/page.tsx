"use client";

import { useTable } from "@refinedev/core";
import { useGo } from "@refinedev/core";
import { useState } from "react";
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
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
  Loader2,
} from "lucide-react";

type Category = {
  id: number;
  name: string;
  description: string;
  created_at: string;
};

export default function CategoriesList() {
  const go = useGo();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof Category>("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { tableQuery } = useTable<Category>({
    resource: "categories",
  });

  const categories = tableQuery?.data?.data || [];
  const isLoading = tableQuery?.isLoading;

  // Filter and sort categories
  const filteredCategories = categories
    .filter((category: Category) => {
      return category.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    })
    .sort((a: Category, b: Category) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const multiplier = sortOrder === "asc" ? 1 : -1;
      return aVal > bVal ? multiplier : -multiplier;
    });

  const handleSort = (field: keyof Category) => {
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
          <p className="text-[var(--admin-text-secondary)]">Loading categories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Breadcrumb items={[{ label: "Categories" }]} />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--admin-text-primary)]">
              Categories
            </h1>
            <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
              Manage and organize content categories
            </p>
          </div>
          <button
            onClick={() => go({ to: "/admin/categories/create" })}
            className="flex items-center space-x-2 rounded-lg bg-[var(--admin-sky)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--admin-sky-dark)] shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Create Category</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="admin-card p-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--admin-text-muted)]" />
            <Input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-[var(--admin-border)] focus:border-[var(--admin-sky)] focus:ring-[var(--admin-sky)]/20"
            />
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
                  onClick={() => handleSort("name")}
                  className="flex items-center space-x-1 hover:text-[var(--admin-text-primary)]"
                >
                  <span>Name</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[var(--admin-text-secondary)] font-semibold">
                Description
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
            {filteredCategories.length ? (
              filteredCategories.map((category: Category) => (
                <TableRow
                  key={category.id}
                  className="border-[var(--admin-border)] hover:bg-[var(--admin-surface-hover)]"
                >
                  <TableCell className="font-medium text-[var(--admin-text-primary)]">
                    #{category.id}
                  </TableCell>
                  <TableCell className="font-medium text-[var(--admin-text-primary)]">
                    {category.name}
                  </TableCell>
                  <TableCell className="text-[var(--admin-text-secondary)] max-w-md truncate">
                    {category.description || "-"}
                  </TableCell>
                  <TableCell className="text-[var(--admin-text-secondary)]">
                    {new Date(category.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() =>
                          go({ to: `/admin/categories/show/${category.id}` })
                        }
                        className="rounded-md p-2 text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] hover:text-[var(--admin-text-primary)]"
                        title="View"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() =>
                          go({ to: `/admin/categories/edit/${category.id}` })
                        }
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
                  No categories found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {(() => {
        const totalPages = Math.ceil(filteredCategories.length / pageSize);
        const paginatedCategories = filteredCategories.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
        return (
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--admin-text-secondary)]">
              Showing {paginatedCategories.length} of {filteredCategories.length} categories
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border border-[var(--admin-border)] px-3 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <div className="flex items-center space-x-1">
                {[...Array(Math.min(totalPages, 5))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      currentPage === i + 1
                        ? "bg-[var(--admin-sky)] text-white"
                        : "text-[var(--admin-text-secondary)] hover:bg-[var(--admin-surface-hover)]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
                className="rounded-lg border border-[var(--admin-border)] px-3 py-2 text-sm font-medium text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
