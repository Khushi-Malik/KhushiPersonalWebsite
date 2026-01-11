import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { personalBlogs, researchPapers, educationalBlogs } from '../blogs';

const BlogPost = () => {
    const { id, category } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    
    // Get the correct blog array based on category or search all
    const getBlogFromCategory = () => {
        const blogId = parseInt(id);
        
        if (category) {
            // If category is specified in URL, search in that category
            switch(category) {
                case 'personal':
                    return personalBlogs.find(p => p.id === blogId);
                case 'educational':
                    return educationalBlogs.find(p => p.id === blogId);
                case 'research':
                    return researchPapers.find(p => p.id === blogId);
                default:
                    return null;
            }
        } else {
            // Fallback: search all blogs (for backwards compatibility)
            const allBlogs = [...personalBlogs, ...educationalBlogs, ...researchPapers];
            return allBlogs.find(p => p.id === blogId);
        }
    };
    
    const post = getBlogFromCategory();

    useEffect(() => {
        if (post && post.contentFile) {
            // Fetch from public folder
            fetch(`/blogs/${post.contentFile}`)
                .then(res => {
                    if (!res.ok) throw new Error('Failed to load blog content');
                    return res.text();
                })
                .then(text => {
                    setContent(text);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error loading blog content:', err);
                    setContent('Failed to load blog content.');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [post]);

    if (!post) {
        return (
            <section className="max-container py-16">
                <div className="text-center">
                    <h1 className="text-2xl font-medium text-gray-900 mb-4">Post not found</h1>
                    <Link to="/blog" className="text-gray-600 underline hover:text-gray-900">
                        Back to all posts
                    </Link>
                </div>
            </section>
        );
    }

    if (loading) {
        return (
            <section className="max-container py-16">
                <div className="text-center text-gray-600">Loading...</div>
            </section>
        );
    }

    const isResearch = post.category === 'research' || category === 'research';

    return (
        <section className="max-container">
            <Link to="/blog" className="inline-block mb-8 text-gray-600 hover:text-gray-900">
                ← Back to all posts
            </Link>

            <article className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <span className="text-xs uppercase tracking-wide text-gray-500">
                        {post.category || category}
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                </h1>

                {isResearch && (
                    <div className="mb-4 text-gray-600">
                        <p className="font-medium">{post.authors}</p>
                        <p className="text-gray-500">{post.journal}</p>
                    </div>
                )}

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
                    {post.date && (
                        <>
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <span>·</span>
                        </>
                    )}
                    <span>{post.readTime}</span>
                </div>

                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>

                {isResearch && post.paperUrl && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <a
                            href={post.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                        >
                            Read Original Paper
                        </a>
                    </div>
                )}
            </article>
        </section>
    );
};

export default BlogPost;