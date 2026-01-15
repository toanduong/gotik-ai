"use client";

import { Bell, Search, Settings, User, LogOut } from "lucide-react";
import { useState } from "react";

export function Topbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-16 border-b border-[var(--admin-border)] bg-[var(--admin-surface)]">
      <div className="flex h-full items-center justify-between px-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--admin-text-muted)]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-[var(--admin-border)] bg-[var(--admin-surface)] py-2 pl-10 pr-4 text-sm text-[var(--admin-text-primary)] placeholder-[var(--admin-text-muted)] focus:border-[var(--admin-sky)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-sky)]/20"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative rounded-lg p-2 text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] hover:text-[var(--admin-text-primary)]"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--admin-sky)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--admin-sky)]"></span>
              </span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-surface)] shadow-lg">
                <div className="border-b border-[var(--admin-border)] p-4">
                  <h3 className="text-sm font-semibold text-[var(--admin-text-primary)]">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-3 hover:bg-[var(--admin-surface-hover)] cursor-pointer transition-colors">
                    <p className="text-sm font-medium text-[var(--admin-text-primary)]">
                      New post published
                    </p>
                    <p className="text-xs text-[var(--admin-text-muted)] mt-1">
                      2 minutes ago
                    </p>
                  </div>
                  <div className="p-3 hover:bg-[var(--admin-surface-hover)] cursor-pointer transition-colors">
                    <p className="text-sm font-medium text-[var(--admin-text-primary)]">
                      Category updated
                    </p>
                    <p className="text-xs text-[var(--admin-text-muted)] mt-1">
                      1 hour ago
                    </p>
                  </div>
                </div>
                <div className="border-t border-[var(--admin-border)] p-2">
                  <button className="w-full rounded-md py-2 text-xs font-medium text-[var(--admin-sky)] hover:bg-[var(--admin-surface-hover)] transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="rounded-lg p-2 text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] hover:text-[var(--admin-text-primary)]">
            <Settings className="h-5 w-5" />
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors hover:bg-[var(--admin-surface-hover)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--admin-navy)] text-sm font-medium text-white">
                A
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-[var(--admin-text-primary)]">
                  Admin User
                </p>
                <p className="text-xs text-[var(--admin-text-muted)]">
                  admin@gotik.ai
                </p>
              </div>
            </button>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-surface)] shadow-lg">
                <div className="border-b border-[var(--admin-border)] p-3">
                  <p className="text-sm font-medium text-[var(--admin-text-primary)]">
                    Admin User
                  </p>
                  <p className="text-xs text-[var(--admin-text-muted)]">
                    admin@gotik.ai
                  </p>
                </div>
                <div className="p-2">
                  <button className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] hover:text-[var(--admin-text-primary)]">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </button>
                  <button className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm text-[var(--admin-text-secondary)] transition-colors hover:bg-[var(--admin-surface-hover)] hover:text-[var(--admin-text-primary)]">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                </div>
                <div className="border-t border-[var(--admin-border)] p-2">
                  <button className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm text-[var(--admin-error)] transition-colors hover:bg-red-50">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
