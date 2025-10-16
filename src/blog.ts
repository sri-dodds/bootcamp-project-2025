//import {StringLiteral} from "typescript"

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
        image: "downloas.jpg",
        imageAlt: "neural networks in brain",
        slug: "intro-to-ai"
    },
    {
        title: "The Magic of Recursion",
        date: "October 10, 2025",
        description: `Recursion is when a function calls itself to solve smaller pieces 
of a problem before coming to the one at hand. Using recursion, code size can significantly decrease and
many problems become easier to solve.`,
        image: "download.png",
        imageAlt: "infinity mirrors showing recursion",
        slug: "the-magic-of-recursion"
    }
]
const blogContainer = document.getElementById('blog-container');
blogs.forEach((blog) => {
    const blogDiv = document.createElement('div');
    blogDiv.className="blog-post-container"

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("h2");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.textContent = blog.description;

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const blogLink = document.createElement('a');
    blogLink.href = "blogs/" + blog.slug + ".html";;
    
    
    blogDiv.append(title, date, image, description);
    blogLink.append(blogDiv);
    if (blogContainer)
        blogContainer.append(blogLink);
});


