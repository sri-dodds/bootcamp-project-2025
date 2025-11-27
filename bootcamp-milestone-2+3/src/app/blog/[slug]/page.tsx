import connectDB from "../../../database/db";
import BlogModel from "../../../database/blogSchema";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { Blog } from "../../../database/blogSchema";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>; // params may be a Promise
};

export default async function Blog(props: Props) {
  const { slug } = await props.params;
  await connectDB();
  const blog = await BlogModel.findOne<Blog>({ slug }).lean();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{blog.title}</h1>
      <p style={{ fontStyle: "italic", color: "#666" }}>
        {new Date(blog.date).toLocaleDateString()}
      </p>

      <Image
        src={blog.image}
        alt={blog.imageAlt}
        width={600}
        height={400}
      />

      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </main>
  );
}


