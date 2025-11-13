import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import { Blog } from '../app/blog/blogData';
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
     <Link href={`/blog/${props.href}`} className={style.blogLink}>
      <div className={style.blogPreview}>
        <h3>{props.title}</h3>
        <div>
          <Image src={props.image} alt={props.imageAlt} width={500} height={500} />
          <p>{props.description}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </Link>
  );
}


