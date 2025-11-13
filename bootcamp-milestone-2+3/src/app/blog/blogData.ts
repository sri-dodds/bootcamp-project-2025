export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  content:string
}

export const blogs: Blog[] = [
  {
    title: "Introduction to AI",
    date: "October 16, 2025",
    description: `The use of artificial intelligence has ramped up in the
    past few years and is now a part of many of our daily lives. Learn more about complex concepts 
    like machine learning, explore the ethical aspects of AI, and learn about real-world applications!`,
    image: "/download.jpg",
    imageAlt: "neural networks in brain",
    href: "intro-to-ai",
    content: "Artificial intelligence is a field of science concerned with building computers and machines that can reason, learn, and act in such a way that would normally require human intelligence or that involves data whose scale exceeds what humans can analyze. AI systems learn and improve through exposure to vast amounts of data, identifying patterns and relationships that humans may miss. The use of artificial intelligence has increased drastically in the past few years and is now a part of many of our daily lives.In this post, we’ll explore how AI works,including key concepts like machine learning, neural networks, and natural language processing. We'll also dive into the ethical considerations of AI <br /> from the viewpoint of a developer as well as biases in algorithms to its impact on jobs and privacy. Finally, we’ll look at real-world applications of AI in industries like healthcare, education, and transportation."
  },
  {
    title: "The Magic of Recursion",
    date: "October 10, 2025",
    description: `Recursion is when a function calls itself to solve smaller pieces 
    of a problem before coming to the one at hand. Using recursion, code size can significantly decrease and
    many problems become easier to solve.`,
    image: "/download.png",
    imageAlt: "infinity mirrors showing recursion",
    href: "magic-of-recursion",
    content: "Recursion can seem confusing at first, but once you understand how it works, it quickly becomes one of the most powerful tools in programming. At its core, recursion is when a function calls itself in order to solve a smaller part of a larger problem. It is actually a logical way to think about certain tasks and simplifies the code. In programming, recursion is often used for problems that have a natural repetitive structure, such as calculating factorials, or when dealing with linked lists and binary trees. One of the most important parts of writing a recursive function is defining the base case, which tells the function when to stop calling itself. Without a base case, the function would continue forever and eventually crash the program. Recursion is very unique in how it can simplify complex problems into much shorter and cleaner solutions. Instead of writing long loops and tracking lots of variables, recursion allows the function to essentially solve itself by repeating the same logic on a smaller scale. Learning recursion has been one of the most challenging yet interesting parts of computer science for me. Once I understood it, I started noticing patterns in problems that I would not have recognized before. It made me realize that sometimes, thinking differently is the key to solving something difficult"
  
  },
];
export default blogs