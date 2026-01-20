"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { supabaseClient } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

type Post = {
    id: number;
    title: string;
    content: string;
    status: string;
    created_at: string;
    featured_image_url: string;
    slug: string;
};

const POSTS_PER_PAGE = 10;

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Fetch all published posts
    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const { data, error } = await supabaseClient
                    .from('posts')
                    .select('id, title, content, status, created_at, featured_image_url, slug')
                    .eq('status', 'published')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                setPosts(data || []);
                setDisplayedPosts((data || []).slice(0, POSTS_PER_PAGE));
                setHasMore((data || []).length > POSTS_PER_PAGE);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    // Load more posts
    const loadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            const nextPage = currentPage + 1;
            const newDisplayedPosts = posts.slice(0, nextPage * POSTS_PER_PAGE);
            setDisplayedPosts(newDisplayedPosts);
            setCurrentPage(nextPage);
            setHasMore(newDisplayedPosts.length < posts.length);
            setIsLoadingMore(false);
        }, 500);
    };

    // Extract excerpt from content (first 150 characters of plain text)
    const getExcerpt = (content: string) => {
        const plainText = content.replace(/<[^>]*>/g, '');
        return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
    };

    if (isLoading) {
        return (
            <main className="relative bg-white min-h-screen font-sans">
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh] pt-24">
                    <div className="text-center">
                        <Loader2 className="h-12 w-12 animate-spin text-sky-blue mx-auto mb-4" />
                        <p className="text-neutral-gray">Loading blog posts...</p>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="relative bg-white min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-br from-white to-white/90">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-navy-blue mb-6">
                            Our Blog
                        </h1>
                        <p className="text-xl text-sky-blue max-w-2xl mx-auto">
                            Insights, updates, and stories from the world of technology and innovation
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    {displayedPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-neutral-gray text-lg">No blog posts available yet.</p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                            {displayedPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Link href={`/blog/${post.id}`}>
                                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-sky-blue h-full flex flex-col">
                                            {/* Date Badge */}
                                            <div className="px-6 pt-6 pb-4">
                                                <time className="text-sm text-sky-blue font-medium">
                                                    {new Date(post.created_at).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </time>
                                            </div>

                                            {/* Content */}
                                            <div className="px-6 pb-6 flex-1 flex flex-col">
                                                <h2 className="text-2xl font-display font-bold text-navy-blue mb-4 group-hover:text-sky-blue transition-colors line-clamp-2">
                                                    {post.title}
                                                </h2>
                                                <img
                                                    src={post.featured_image_url}
                                                    alt={post.slug}
                                                    className="w-full h-auto"
                                                />
                                                <p className="text-neutral-gray leading-relaxed mb-4 line-clamp-3 flex-1">
                                                    {getExcerpt(post.content)}
                                                </p>
                                                <div className="flex items-center text-sky-blue font-medium text-sm group-hover:gap-2 transition-all">
                                                    <span>Read more</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    )}

                    {/* Load More Button */}
                    {hasMore && displayedPosts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 text-center"
                        >
                            <button
                                onClick={loadMore}
                                disabled={isLoadingMore}
                                className="px-8 py-3.5 bg-navy-blue text-white font-medium rounded-full hover:bg-sky-blue transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                            >
                                {isLoadingMore ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        <span>Loading...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>View More Posts</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                            <p className="text-neutral-gray text-sm mt-4">
                                Showing {displayedPosts.length} of {posts.length} posts
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
