import React from 'react';
import style from './BlogPreview.module.css';
import Image from 'next/image';
import Link from 'next/link';
import type { Blog } from @/typings/blog"

type BlogPreviewProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
};

export default function BlogPreview({ title, date, description, image, slug }: BlogPreviewProps) {
  return (
    <div className={style.blogCard}>
      <h3>{title}</h3>
      <Image src={image} alt={title} width={500} height={300} />
      <p>{description}</p>
      <p>{date}</p>
      <Link href={`/blog/${slug}`}>Read More</Link>
    </div>
  );
}
