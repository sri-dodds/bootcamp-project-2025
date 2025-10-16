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
function displayBlogs(blogs) {
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement('div');
        var title = document.createElement("h1");
        title.textContent = blog.title;
        // Create date element
        var date = document.createElement('January 1, 2020');
        date.textContent = blog.date;
        // Create description element
        var description = document.createElement('p');
        description.textContent = blog.description;
        // Create image element
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        // Append elements to blogDiv
        blogDiv.appendChild(title);
        blogDiv.appendChild(date);
        blogDiv.appendChild(image);
        blogDiv.appendChild(description);
        // Append blogDiv to container
        blogContainer.appendChild(blogDiv);
    });
}
