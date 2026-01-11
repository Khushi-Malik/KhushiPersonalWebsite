import React, { useState, useEffect } from 'react';
import { personalBlogs, researchPapers, educationalBlogs } from '../blogs';
import { Link } from 'react-router-dom'; 

const BlogCard = ({ post, searchTerm }) => {
    const isResearch = post.category === 'research';
    
    // Highlight search terms in content
    const getHighlightedText = (text) => {
        if (!searchTerm || !text) return text;
        
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const parts = text.split(regex);
        
        return parts.map((part, i) => 
            regex.test(part) ? <mark key={i} className="bg-yellow-200">{part}</mark> : part
        );
    };
    
    return (
        <article className="py-6 border-b border-gray-200 last:border-b-0">
            <div className="mb-2">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                    {post.category}
                </span>
            </div>
            
            <Link to={`/blog/${post.category}/${post.id}`}>
                <h2 className="text-xl font-medium text-gray-900 mb-2 hover:text-gray-600 transition-colors cursor-pointer">
                    {getHighlightedText(post.title)}
                </h2>
            </Link>

            {isResearch && (
                <div className="mb-2 text-sm text-gray-600">
                    <p>{post.authors}</p>
                    <p className="text-gray-500">{post.journal}</p>
                </div>
            )}

            <p className="text-gray-600 mb-3 leading-relaxed">
                {getHighlightedText(post.excerpt)}
            </p>
            
            {/* Show content preview if search term found in content */}
            {searchTerm && post.contentPreview && post.contentPreview.toLowerCase().includes(searchTerm.toLowerCase()) && (
                <div className="mb-3 text-sm text-gray-500 italic border-l-2 border-gray-300 pl-3">
                    <p className="line-clamp-2">
                        ...{getHighlightedText(post.contentPreview)}...
                    </p>
                </div>
            )}

            <div className="flex items-center gap-4 text-sm text-gray-500">
                {post.date && (
                    <>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>·</span>
                    </>
                )}
                <span>{post.readTime}</span>
                {isResearch && post.paperUrl && (
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
    const [blogsWithContent, setBlogsWithContent] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load all blog contents on mount
    useEffect(() => {
        const loadAllBlogContents = async () => {
            const allBlogs = [
                ...personalBlogs.map(blog => ({ ...blog, category: 'personal' })),
                ...educationalBlogs.map(blog => ({ ...blog, category: 'educational' })),
                ...researchPapers.map(blog => ({ ...blog, category: 'research' }))
            ];

            const blogsWithContentPromises = allBlogs.map(async (blog) => {
                if (blog.contentFile) {
                    try {
                        const response = await fetch(`/blogs/${blog.contentFile}`);
                        if (response.ok) {
                            const content = await response.text();
                            // Get a preview (first 500 chars after title)
                            const contentWithoutTitle = content.split('\n').slice(2).join('\n');
                            const preview = contentWithoutTitle.substring(0, 500);
                            return { 
                                ...blog, 
                                fullContent: content.toLowerCase(),
                                contentPreview: preview
                            };
                        } else {
                            console.warn(`Failed to load ${blog.contentFile}: ${response.status}`);
                        }
                    } catch (error) {
                        console.error(`Error loading content for ${blog.title}:`, error);
                    }
                }
                return { ...blog, fullContent: '', contentPreview: '' };
            });

            const loadedBlogs = await Promise.all(blogsWithContentPromises);
            // Sort by date (newest first)
            const sortedBlogs = loadedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
            setBlogsWithContent(sortedBlogs);
            setLoading(false);
        };

        loadAllBlogContents();
    }, []);

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

    // Filter by category and search term (including full content)
    const filteredPosts = blogsWithContent.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
        
        if (!searchTerm) {
            return matchesCategory;
        }
        
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
            post.title.toLowerCase().includes(searchLower) ||
            post.excerpt.toLowerCase().includes(searchLower) ||
            post.fullContent.includes(searchLower) || // Search full content!
            post.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        return matchesCategory && matchesSearch;
    });

    if (loading) {
        return (
            <section className="max-container">
                <div className="text-center py-16">
                    <p className="text-gray-600">Loading blogs...</p>
                </div>
            </section>
        );
    }

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
                    placeholder="Search titles, content, and tags..."
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

            {searchTerm && (
                <div className="max-w-3xl mx-auto mb-6 text-sm text-gray-600">
                    Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
                </div>
            )}

            {filteredPosts.length > 0 ? (
                <div className="max-w-3xl mx-auto text-left">
                    {filteredPosts.map((post) => (
                        <BlogCard 
                            key={`${post.category}-${post.id}`} 
                            post={post}
                            searchTerm={searchTerm}
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