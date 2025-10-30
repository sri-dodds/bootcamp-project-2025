"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import "../globals.css";
import BlogPreview from '@/components/blogPreview;

export default function BlogPage() {
  useEffect(() => {
    // Optional: If your blog.js adds content dynamically, 
    // you can import and run that logic here instead.
    // Example: dynamically load content or call APIs.
    console.log("Blog page loaded");
  }, []);

  return (
    <div>
      <nav className="navbar">
      </nav>

      <main>
        <h2 className="blog">Personal Blog</h2>
        <p>Welcome to my Blog!</p>

        {/* Blog container for dynamic content */}
        <div id="blog-container"></div>
      </main>

      <footer className="footer">
        © 2025 Srinithi&apos;s Personal Website | All Rights Reserved
      </footer>
    </div>
    {blogs.map(blog => 
      <BlogPreview /> // This is how we call the component
		)}
    
  );
}