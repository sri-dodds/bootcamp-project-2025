import React from "react";
import BlogPreview from "../../components/blogPreview";
import { blogs, type Blog}  from "./blogData";

export default function BlogPage() {
  return (
    <main style={{ padding: "40px 20px" }}>
      <h1>
        Personal Blog
      </h1>

      <div>
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.href} // unique key for React
            title={blog.title}
            description={blog.description}
            date={blog.date}
            image={blog.image}
            imageAlt={blog.imageAlt}
            href={blog.href}
            content = {blog.content}
          />
        ))}
      </div>

      <footer className="footer">
        © 2025 Srinithi's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
