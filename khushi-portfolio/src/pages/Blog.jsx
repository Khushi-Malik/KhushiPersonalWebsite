import React, { useState } from 'react'
import { personalBlogs, researchPapers, educationalBlogs } from '../blogs';
import { Link } from 'react-router-dom'; 

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
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Combine all blogs into one array with category labels
    const allBlogs = [
        ...personalBlogs.map(blog => ({ ...blog, category: 'personal' })),
        ...educationalBlogs.map(blog => ({ ...blog, category: 'educational' })),
        ...researchPapers.map(blog => ({ ...blog, category: 'research' }))
    ];

    // Sort by date (newest first)
    const sortedBlogs = allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    const handleSearch = () => {
        setSearchTerm(searchInput);
    };

    const handleClear = () => {
        setSearchInput('');
        setSearchTerm('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Filter by category and search term
    const filteredPosts = sortedBlogs.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
        const matchesSearch = searchTerm === '' || 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return matchesCategory && matchesSearch;
    });

    return (
         <section className="max-container">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="head-text mb-6">
                    Writing
                </h1>
                <div className="max-w-2xl mx-auto">
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Thoughts on technology, personal experiences, and research papers I find interesting. 
                        More content coming soon.
                    </p>
                </div>
            </div>

            <div className="max-w-xl mx-auto mb-8 flex gap-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                />
                <button
                    onClick={handleSearch}
                    className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                >
                    Search
                </button>
                {(searchInput || searchTerm) && (
                    <button
                        onClick={handleClear}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
                    >
                        Clear
                    </button>
                )}
            </div>

            <div className="flex gap-6 mb-12 border-b border-gray-200 justify-center">
                <button
                    onClick={() => setActiveCategory('all')}
                    className={`pb-3 font-medium transition-colors ${
                        activeCategory === 'all' 
                            ? 'text-gray-900 border-b-2 border-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveCategory('personal')}
                    className={`pb-3 font-medium transition-colors ${
                        activeCategory === 'personal' 
                            ? 'text-gray-900 border-b-2 border-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Personal
                </button>
                <button
                    onClick={() => setActiveCategory('educational')}
                    className={`pb-3 font-medium transition-colors ${
                        activeCategory === 'educational' 
                            ? 'text-gray-900 border-b-2 border-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Educational
                </button>
                <button
                    onClick={() => setActiveCategory('research')}
                    className={`pb-3 font-medium transition-colors ${
                        activeCategory === 'research' 
                            ? 'text-gray-900 border-b-2 border-gray-900' 
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Papers
                </button>
            </div>

            {filteredPosts.length > 0 ? (
                <div className="max-w-3xl mx-auto text-left">
                    {filteredPosts.map((post) => (
                        <BlogCard 
                            key={`${post.category}-${post.id}`} 
                            post={post} 
                        />
                    ))}
                </div>
            ) : (
                <div className="py-16 text-gray-500 text-center">
                    <p>No posts found. {activeCategory !== 'all' && 'Try selecting a different category or'} Clear your search to see all posts.</p>
                </div>
            )}
        </section>
    );
};

export default Blog;