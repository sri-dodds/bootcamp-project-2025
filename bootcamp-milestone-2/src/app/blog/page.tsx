
import React, { useEffect } from "react";
import "./styles.css";

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
        <h1 className="logo">
          <a href="index.html">Srinithi&apos;s Personal Website</a>
        </h1>
        <ul className="nav-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="resume.html">Resume</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
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
  );
}