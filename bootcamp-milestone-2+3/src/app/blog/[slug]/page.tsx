"use client"
import React from "react";
import { useParams } from "next/navigation";
import {blogs} from "../blogData";
import Image from "next/image";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug; // gets 'introduction-to-ai' or 'magic-of-recursion'

  const blog = blogs.find((b) => b.href === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main> 
      <h1>{blog.title}</h1>
      <p style={{ fontStyle: "italic" }}>{blog.date}</p>
      <Image src={blog.image} alt={blog.imageAlt} width={500} height={500} />
        {blog.content.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
    </main>
  );
}

