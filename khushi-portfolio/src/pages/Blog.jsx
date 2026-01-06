import React, { useState } from 'react'
import { personalBlogs, researchPapers, educationalBlogs } from '../blog-content/blogs';

const BlogCard = ({ post, type = "blog" }) => {
    return (
        <article className="py-6 border-b border-gray-200 last:border-b-0">
            <div className="mb-2">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                    {post.category === 'research' ? 'Paper Review' : post.category}
                </span>
            </div>
            
            <Link to={`/blog/${post.id}`}>
                <h2 className="text-xl font-medium text-gray-900 mb-2 hover:text-gray-600 transition-colors cursor-pointer">
                    {post.title}
                </h2>
            </Link>

            {type === "research" && (
                <div className="mb-2 text-sm text-gray-600">
                    <p>{post.authors}</p>
                    <p className="text-gray-500">{post.journal}</p>
                </div>
            )}

            <p className="text-gray-600 mb-3 leading-relaxed">
                {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
                {post.date && (
                    <>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>·</span>
                    </>
                )}
                <span>{post.readTime}</span>
                {type === "research" && post.paperUrl && (
                    <>
                        <span>·</span>
                        <a
                            href={post.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-900"
                        >
                            Read paper
                        </a>
                    </>
                )}
            </div>
        </article>
    );
};

const Blog = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [searchTerm, setSearchTerm] = useState('');

    const getCurrentPosts = () => {
        switch(activeTab) {
            case 'personal': return personalBlogs;
            case 'educational': return educationalBlogs;
            case 'research': return researchPapers;
            default: return personalBlogs;
        }
    };

    const filteredPosts = getCurrentPosts().filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <section className='max-container'>
            <div className="mb-12">
                <h1 className="head-text mb-4">
                    Writing
                </h1>
                <p className="text-gray-600 max-w-2xl">
                    Thoughts on technology, personal experiences, and research papers I find interesting. 
                    More content coming soon.
                </p>
            </div>

            <div className="max-w-xl mb-8">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                />
            </div>

            <div className="flex gap-6 mb-12 border-b border-gray-200 justify-center">
                <button
                    onClick={() => setActiveTab('personal')}
                    className={`pb-3 font-medium transition-colors ${
                        activeTab === 'personal' 
                            ? 'text-gray-900 border-b-2 border-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Personal
                </button>
                <button
                    onClick={() => setActiveTab('educational')}
                    className={`pb-3 font-medium transition-colors ${
                        activeTab === 'educational' 
                            ? 'text-gray-900 border-b-2 border-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Educational
                </button>
                <button
                    onClick={() => setActiveTab('research')}
                    className={`pb-3 font-medium transition-colors ${
                        activeTab === 'research' 
                            ? 'text-gray-900 border-b-2 border-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Papers
                </button>
            </div>

            {filteredPosts.length > 0 ? (
                <div className="max-w-3xl">
                    {filteredPosts.map((post) => (
                        <BlogCard 
                            key={post.id} 
                            post={post} 
                            type={activeTab === 'research' ? 'research' : 'blog'} 
                        />
                    ))}
                </div>
            ) : (
                <div className="py-16 text-gray-500">
                    <p>No posts yet in this category. Check back soon!</p>
                </div>
            )}
        </section>
    );
};

export default Blog;