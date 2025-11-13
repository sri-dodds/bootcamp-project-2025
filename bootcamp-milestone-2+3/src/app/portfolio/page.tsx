import "../globals.css";
import connectDB from "../../database/db";
import Project from "../../database/projectModel";

export default async function PortfolioPage() {
  const projects = await getProjects();
  if (!projects) {
    return (
      <main>
        <h1 className="portfolio">My Portfolio</h1>
        <p>Unable to load projects.</p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="portfolio">My Portfolio</h1>

      <div>
        {projects.map((project: any) => (
          <div className="project" key={project._id}>
            <a href={project.slug}>
              <img
                src={project.image}
                alt={project.imageAlt}
                width={800}
              />
            </a>

            <div className="project-details">
              <p className="project-name">{project.title}</p>
              <p className="project-description">{project.description}</p>
              <a href={project.slug}>Learn More</a>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        © 2025 Srinithi's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}

async function getProjects() {
  await connectDB(); 
  try {
    const projects = await Project.find().sort({ date: -1 }).orFail();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}