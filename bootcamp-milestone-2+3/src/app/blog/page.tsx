import connectDB from "../../database/db";
import Blog from "../../database/blogSchema";

export default async function BlogPage() {
  // Fetch blogs from MongoDB
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <main style={{ padding: "40px 20px" }}>
        <h1>Personal Blog</h1>
        <p>Unable to load blogs </p>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px 20px" }}>
      <h1>Personal Blog</h1>

      <div>
        {blogs.map((blog: any) => (
          <article key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <small>{new Date(blog.date).toLocaleDateString()}</small>
          </article>
        ))}
      </div>

      <footer className="footer">
        © 2025 Srinithi's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}

async function getBlogs() {
  await connectDB(); // connects to your MongoDB

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null;
  }
}