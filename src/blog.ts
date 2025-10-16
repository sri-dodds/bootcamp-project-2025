import { StringLiteral } from "typescript"

type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Introduction to AI",
        date:"October 16, 2025",
        description:`The use of artificial intelligence has ramped up in the
     past few uears and is now apart of many of our daily lives. Learn more about complex concepts 
     like machine leanring, explore the ethical aspect of AI, and learn about real-world application!`,
        image: "string.jpg",
        imageAlt: "neural networks in brain",
        slug: "https://sdodds.com/blogs/intro-to-ai"
    },
    {
        title: "The Magic of Recursion",
        date: "October 16, 2025",
        description: `Recursion is when a function calls itself to solve smaller pieces 
of a problem before coming to the one at hand. Using recursion, code size can significantly decrease and
many problems become easier to solve.`,
        image: "recursion.jpg",
        imageAlt: "infinity mirrors showing recursion",
        slug: "https://sdodds.com/blogs/the-magic-of-recursion"
    }
]

