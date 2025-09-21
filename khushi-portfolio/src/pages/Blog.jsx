import React, { useState } from 'react'
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { personalBlogs, researchPapers, educationalBlogs } from '../blogs';

const BlogCard = ({ post, type = "blog" }) => {
    return (
        <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 capitalize font-medium">
                        {post.category === 'research' ? 'Paper Review' : post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-400 gap-4">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    {post.title}
                </h2>
            </div>

            {/* Research paper specific info */}
            {type === "research" && (
                <div className="mb-3 text-sm text-gray-600">
                    <p className="font-medium">{post.authors}</p>
                    <p className="text-gray-500">{post.journal}</p>
                </div>
            )}

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                        {tag}
                    </span>
                ))}
                {post.tags.length > 3 && (
                    <span className="text-xs text-gray-400">+{post.tags.length - 3} more</span>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                    {type === "research" && post.paperUrl && (
                        <a
                            href={post.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Original Paper
                        </a>
                    )}
                </div>
                <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition-colors">
                    Read More
                </button>
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
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="head-text mb-6">
                    My Writing
                </h1>
                <div className="max-w-2xl mx-auto">
                    <p className="text-gray-600 leading-relaxed mb-4">
                        This page is a work in progress right now... BUT I like to read and write about 
                        a variety of topics, including technology, personal experiences, and research papers.
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                />
            </div>

            {/* Simple Tabs */}
                  <div className="flex justify-between max-w-md mx-auto mb-12">
                        <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                            activeTab === 'personal' ? 'bg-[#6FE3F0] text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
                        }`}
                        >
                        Personal
                        </button>
                        <button
                        onClick={() => setActiveTab('educational')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                            activeTab === 'educational' ? 'bg-[#6FE3F0] text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
                        }`}
                        >
                        Educational
                        </button>
                        <button
                        onClick={() => setActiveTab('paper')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                            activeTab === 'paper' ? 'bg-[#6FE3F0] text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
                        }`}
                        >
                        Papers
                        </button>
                    </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <BlogCard 
                            key={post.id} 
                            post={post} 
                            type={activeTab === 'research' ? 'research' : 'blog'} 
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-600 mb-2">No posts found</h3>
                    <p className="text-gray-500">Try adjusting your search or browse a different category</p>
                </div>
            )}
        </section>
    );
};

export default Blog;