"use client";

export const dynamic = 'force-dynamic';

import { useLogin } from "@refinedev/core";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  const { mutate: login, isPending } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password, remember: rememberMe });
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column: Form */}
      <div className="flex w-full flex-col lg:w-1/2">
        <div className="flex flex-1 flex-col justify-center px-8 sm:px-12 md:px-24 lg:px-32 xl:px-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="group mb-12 inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Home
            </Link>

            <div className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Sign In</h1>
              <p className="text-slate-500">Enter your email and password to sign in!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-slate-900">
                  Email<span className="text-red-500 ml-0.5">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-slate-900">
                  Password<span className="text-red-500 ml-0.5">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-12 border-slate-200 bg-white px-4 pr-10 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <Label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer">
                    Keep me logged in
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-blue-600 text-base font-bold text-white hover:bg-blue-700 transition-all rounded-xl shadow-lg shadow-blue-500/20"
                disabled={isPending}
              >
                {isPending ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

          </motion.div>
        </div>
      </div>

      {/* Right Column: Branding */}
      <div className="relative hidden w-1/2 lg:block overflow-hidden">
        <div className="absolute inset-0 bg-blue-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 opacity-90" />

          {/* Decorative shapes */}
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Gotik CMS Admin Dashboard</h2>
            <p className="mb-12 text-blue-100/80">
              Advanced control panel for managing your content, analytics, and business growth.
            </p>

            <div className="relative mx-auto rounded-3xl bg-white/10 p-4 backdrop-blur-md border border-white/20 shadow-2xl">
              <img
                src="https://tailadmin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-image.c8e99df0.png&w=3840&q=100"
                alt="Dashboard Preview"
                className="rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-12 text-sm font-medium text-blue-200/60">
              Trusted by individuals and companies
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
