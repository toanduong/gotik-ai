"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { supabaseClient } from "@/lib/supabase";
import { Loader2, Calendar, ArrowLeft, Share2 } from "lucide-react";

type Post = {
    id: number;
    title: string;
    content: string;
    status: string;
    created_at: string;
    updated_at?: string;
};

type RelatedPost = {
    id: number;
    title: string;
    created_at: string;
};

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const postId = params?.id as string;

    const [post, setPost] = useState<Post | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPostAndRelated() {
            if (!postId) return;

            try {
                setIsLoading(true);
                setError(null);

                // Fetch the current post
                const { data: postData, error: postError } = await supabaseClient
                    .from('posts')
                    .select('*')
                    .eq('id', postId)
                    .eq('status', 'published')
                    .single();

                if (postError) {
                    if (postError.code === 'PGRST116') {
                        setError('Post not found or not published');
                    } else {
                        throw postError;
                    }
                    return;
                }

                setPost(postData);

                // Fetch related posts (3 most recent, excluding current)
                const { data: relatedData } = await supabaseClient
                    .from('posts')
                    .select('id, title, created_at')
                    .eq('status', 'published')
                    .neq('id', postId)
                    .order('created_at', { ascending: false })
                    .limit(3);

                setRelatedPosts(relatedData || []);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Failed to load post');
            } finally {
                setIsLoading(false);
            }
        }

        fetchPostAndRelated();
    }, [postId]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post?.title,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (isLoading) {
        return (
            <main className="relative bg-white min-h-screen font-sans">
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh] pt-24">
                    <div className="text-center">
                        <Loader2 className="h-12 w-12 animate-spin text-sky-blue mx-auto mb-4" />
                        <p className="text-neutral-gray">Loading post...</p>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    if (error || !post) {
        return (
            <main className="relative bg-white min-h-screen font-sans">
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh] pt-24">
                    <div className="text-center">
                        <h1 className="text-3xl font-display font-bold text-navy-blue mb-4">
                            {error || 'Post not found'}
                        </h1>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sky-blue hover:text-navy-blue transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="relative bg-white min-h-screen font-sans">
            <Navbar />

            {/* Article Hero */}
            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-neutral-gray hover:text-sky-blue transition-colors text-sm font-medium"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>
                    </motion.div>

                    {/* Article Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-blue mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-y border-gray-200">
                            <div className="flex items-center gap-6 text-neutral-gray">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <time className="text-sm">
                                        {new Date(post.created_at).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>
                                {post.updated_at && post.updated_at !== post.created_at && (
                                    <span className="text-sm text-neutral-gray/60">
                                        Updated {new Date(post.updated_at).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                )}
                            </div>

                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 text-sm font-medium text-sky-blue hover:text-navy-blue transition-colors"
                            >
                                <Share2 className="h-4 w-4" />
                                Share
                            </button>
                        </div>
                    </motion.header>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg prose-slate max-w-none
                            prose-headings:font-display prose-headings:text-navy-blue
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-neutral-gray prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-sky-blue prose-a:no-underline hover:prose-a:text-navy-blue prose-a:transition-colors
                            prose-strong:text-navy-blue prose-strong:font-semibold
                            prose-ul:my-6 prose-ol:my-6
                            prose-li:text-neutral-gray prose-li:mb-2
                            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                            prose-blockquote:border-l-4 prose-blockquote:border-sky-blue prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-gray
                            prose-code:text-sky-blue prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                            prose-pre:bg-navy-blue prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-slate-50 border-t border-gray-200">
                    <div className="max-w-6xl mx-auto px-6 md:px-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-display font-bold text-navy-blue mb-12"
                        >
                            Related Posts
                        </motion.h2>

                        <div className="grid gap-6 md:grid-cols-3">
                            {relatedPosts.map((relatedPost, index) => (
                                <motion.div
                                    key={relatedPost.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={`/blog/${relatedPost.id}`}>
                                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-sky-blue h-full">
                                            <time className="text-sm text-sky-blue font-medium">
                                                {new Date(relatedPost.created_at).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </time>
                                            <h3 className="text-xl font-display font-bold text-navy-blue mt-3 hover:text-sky-blue transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
