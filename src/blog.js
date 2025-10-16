"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blogs = [
    {
        title: "Introduction to AI",
        date: "October 16, 2025",
        description: "The use of artificial intelligence has ramped up in the\n     past few uears and is now apart of many of our daily lives. Learn more about complex concepts \n     like machine leanring, explore the ethical aspect of AI, and learn about real-world application!",
        image: "string.jpg",
        imageAlt: "neural networks in brain",
        slug: "https://sdodds.com/blogs/intro-to-ai"
    },
    {
        title: "The Magic of Recursion",
        date: "October 16, 2025",
        description: "Recursion is when a function calls itself to solve smaller pieces \nof a problem before coming to the one at hand. Using recursion, code size can significantly decrease and\nmany problems become easier to solve.",
        image: "recursion.jpg",
        imageAlt: "infinity mirrors showing recursion",
        slug: "https://sdodds.com/blogs/the-magic-of-recursion"
    }
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogDiv = document.createElement('div');
    blogDiv.className = "blog-post-container";
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var date = document.createElement("h2");
    date.textContent = blog.date;
    var description = document.createElement("p");
    description.textContent = blog.description;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    blogDiv.append(title, date, image, description);
    if (blogContainer)
        blogContainer.append(blogDiv);
});
