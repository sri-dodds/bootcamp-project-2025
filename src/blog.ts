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
//container element where blog posts are displayed
const blogContainer = document.getElementById('blog-container');

// Loop through the array of blog objects and create HTML elements for each one
blogs.forEach((blog) => {

    // Create a container <div> element for each blog post
    const blogDiv = document.createElement('div');
    blogDiv.className = "blog-post-container"; // Assign a class to the div for styling

    // Create the title element 
    const title = document.createElement("h1");
    title.textContent = blog.title; // Set the title of the blog

    // Create the date element 
    const date = document.createElement("h2");
    date.textContent = blog.date; // Set the publication date of the blog

    // Create the description element  
    const description = document.createElement("p");
    description.textContent = blog.description; // Set the description of the blog

    // Create the image element 
    const image = document.createElement("img");
    image.src = blog.image; 
    image.alt = blog.imageAlt; 

    //anchor tag that will link to the individual blog page
    const blogLink = document.createElement('a');
    blogLink.href = "blogs/" + blog.slug + ".html"; // Set the URL using the slug (unique identifier for the blog)

    //append the title, date, image, and description to the blog container div
    blogDiv.append(title, date, image, description);

    //making the div clickable
    blogLink.append(blogDiv);

    // append the anchor link to the main blog container in the HTML
    if (blogContainer)
        blogContainer.append(blogLink);
});


