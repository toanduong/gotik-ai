"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link
        href="/admin"
        className="flex items-center text-[var(--admin-text-muted)] transition-colors hover:text-[var(--admin-text-primary)]"
      >
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-[var(--admin-text-muted)]" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-[var(--admin-text-muted)] transition-colors hover:text-[var(--admin-text-primary)]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[var(--admin-text-primary)]">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
