"use client";

import { useForm } from "@refinedev/react-hook-form";
import { useGo } from "@refinedev/core";
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
  content: string;
  status: string;
};

export default function CreatePost() {
  const go = useGo();

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
      content: "",
      status: "draft",
    },
  });

  const status = watch("status");
  const content = watch("content");

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
            <Save className="h-4 w-4" />
            <span>{isSubmitting ? "Creating..." : "Create Post"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
