export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export const blogs: Blog[] = [
  {
    title: "Introduction to AI",
    date: "October 16, 2025",
    description: `The use of artificial intelligence has ramped up in the
    past few years and is now a part of many of our daily lives. Learn more about complex concepts 
    like machine learning, explore the ethical aspects of AI, and learn about real-world applications!`,
    image: "download.jpg",
    imageAlt: "neural networks in brain",
    slug: "intro-to-ai",
  },
  {
    title: "The Magic of Recursion",
    date: "October 10, 2025",
    description: `Recursion is when a function calls itself to solve smaller pieces 
    of a problem before coming to the one at hand. Using recursion, code size can significantly decrease and
    many problems become easier to solve.`,
    image: "download.png",
    imageAlt: "infinity mirrors showing recursion",
    slug: "magic-of-recursion",
  },
];