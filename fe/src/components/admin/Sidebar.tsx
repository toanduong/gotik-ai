"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Settings,
  Users,
  BarChart3,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Posts", href: "/admin/posts", icon: FileText },
  { name: "Categories", href: "/admin/categories", icon: FolderOpen },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-[#1a2744] bg-[var(--admin-navy)]">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-[#1a2744] px-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--admin-sky)] text-white font-bold">
            G
          </div>
          <span className="text-lg font-semibold text-white">
            IMS CMS
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200
                ${
                  active
                    ? "bg-[var(--admin-sky)] text-white shadow-lg"
                    : "text-gray-300 hover:bg-[#1a2744] hover:text-white"
                }
              `}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#1a2744] p-4">
        <div className="rounded-lg bg-[#1a2744] p-3">
          <p className="text-xs font-medium text-gray-200">
            Need help?
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Check our documentation
          </p>
        </div>
      </div>
    </aside>
  );
}
