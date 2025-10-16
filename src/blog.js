//import {StringLiteral} from "typescript"
var blogs = [
    {
        title: "Introduction to AI",
        date: "October 16, 2025",
        description: "The use of artificial intelligence has ramped up in the\n     past few uears and is now apart of many of our daily lives. Learn more about complex concepts \n     like machine leanring, explore the ethical aspect of AI, and learn about real-world application!",
        image: "download.jpg",
        imageAlt: "neural networks in brain",
        slug: "intro-to-ai"
    },
    {
        title: "The Magic of Recursion",
        date: "October 10, 2025",
        description: "Recursion is when a function calls itself to solve smaller pieces \nof a problem before coming to the one at hand. Using recursion, code size can significantly decrease and\nmany problems become easier to solve.",
        image: "download.png",
        imageAlt: "infinity mirrors showing recursion",
        slug: "the-magic-of-recursion"
    }
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogLink = document.createElement('a');
    blogLink.href = "blogs/" + blog.slug + ".html";  // Link to individual blog page
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

    blogDiv.append(title,date, image, description);
    blogLink.append(blogDiv)
    if (blogContainer)
        blogContainer.append(blogLink);
});
