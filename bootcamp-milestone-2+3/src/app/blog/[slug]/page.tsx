import connectDB from "../../../database/db";
import BlogModel from "../../../database/blogSchema";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Comment, { IComment } from "../../../components/Comments";
import type { Blog } from "../../../database/blogSchema";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function Blog({ params }: Props) {
  // Await params if it's a promise
  const { slug } = await params;

  // Connect to MongoDB
  await connectDB();

  // Fetch the blog from DB
  const blog: Blog | null = await BlogModel.findOne<Blog>({ slug }).lean();

  // Blog not found
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      {/* Blog Title */}
      <h1>{blog.title}</h1>

      {/* Blog Date */}
      <p style={{ fontStyle: "italic", color: "#666" }}>
        {new Date(blog.date).toLocaleDateString()}
      </p>

      {/* Blog Image */}
      <Image src={blog.image} alt={blog.imageAlt} width={600} height={400} />

      {/* Blog Content */}
      <ReactMarkdown>{blog.content}</ReactMarkdown>

      {/* Comments */}
      <section style={{ marginTop: "2rem" }}>
        <h3>Comments</h3>
        {(Array.isArray(blog.comments) ? blog.comments : []).length > 0 ? (
          (blog.comments ?? []).map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </section>
    </main>
  );
}
