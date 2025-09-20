import React, { useState } from 'react'
import { Calendar, Clock, BookOpen, User, FileText, ExternalLink, Tag } from 'lucide-react';
import { personalBlogs, researchPapers, educationalBlogs } from '../blogs';

const BlogCard = ({ post, type = "blog" }) => {
    const getCategoryColor = (category) => {
        switch(category) {
            case 'personal': return 'from-blue-400 to-teal-400';
            case 'educational': return 'from-yellow-400 to-orange-400';
            case 'research': return 'from-green-400 to-lime-400';
            default: return 'from-gray-500 to-gray-700';
        }
    };

    const getCategoryIcon = (category) => {
        switch(category) {
            case 'personal': return <User className="w-5 h-5" />;
            case 'educational': return <BookOpen className="w-5 h-5" />;
            case 'research': return <FileText className="w-5 h-5" />;
            default: return <BookOpen className="w-5 h-5" />;
        }
    };

    return (
        <article className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
            {/* Header with gradient */}
            <div className={`h-20 bg-gradient-to-br ${getCategoryColor(post.category)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-white">
                    {getCategoryIcon(post.category)}
                    <span className="font-medium capitalize text-sm">
                        {post.category === 'research' ? 'Paper Review' : post.category}
                    </span>
                </div>
                
                {/* Decorative elements */}
                {/* <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full transform translate-x-8 -translate-y-8 opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white rounded-full transform -translate-x-6 translate-y-6 opacity-10"></div> */}
            </div>

            {/* Content */}
            <div className="p-6">
                {type === "research" && (
                    <div className="mb-3">
                        <p className="text-sm text-gray-600 font-medium">{post.authors}</p>
                        <p className="text-xs text-gray-500">{post.journal}</p>
                    </div>
                )}

                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors line-clamp-2">
                    {post.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                            <Tag className="w-3 h-3" />
                            <span>{tag}</span>
                        </span>
                    ))}
                </div>

                {/* Meta info and actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        {type === "research" && post.paperUrl && (
                            <a
                                href={post.paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
                            >
                                <ExternalLink className="w-3 h-3" />
                                <span>Paper</span>
                            </a>
                        )}
                        {/* LINK THE BLOG FROM HERE */}
                        <button className="px-4 py-1 bg-gray-900 hover:bg-gray-800 text-white text-xs rounded-full transition-colors">
                            Read More
                        </button>
                    </div>
                </div>
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
        <section className='max-container text-center'>
            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="head-text">
                <span> My Blogs</span>
              </h1>
              <div className="mt-5 flex flex-col gap-3 text-slate-500">
                  <p >
                      This page is a work in progress right now... BUT <br/>
                      I like to read and write about a variety of topics, including technology, personal experiences, and the research papers I read. Here are some of my recent blog posts.
                  </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
                <div className="inline-flex bg-gray-100 rounded-xl p-1">
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                            activeTab === 'personal'
                                ? 'bg-[#6FE3F0] text-gray-900 shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <User className="w-4 h-4" />
                        <span>Personal</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('educational')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                            activeTab === 'educational'
                                ? 'bg-[#6FE3F0] text-gray-900 shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <BookOpen className="w-4 h-4" />
                        <span>Educational</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('research')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                            activeTab === 'research'
                                ? 'bg-[#6FE3F0] text-gray-900 shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <FileText className="w-4 h-4" />
                        <span>Papers</span>
                    </button>
                </div>
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
                    <p className="text-gray-500">Try adjusting your search or browse a different category</p>
                </div>
            )}

            {/* Newsletter Signup */}
            {/* <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Stay Updated
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Get notified when I publish new blog posts and paper reviews
                </p>
                <div className="flex max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:shadow-lg transition-all duration-200">
                        Subscribe
                    </button>
                </div>
            </div> */}
        </section>
    );
};

export default Blog;