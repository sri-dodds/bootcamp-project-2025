import "../globals.css";

export default function PortfolioPage() {
  return (
    <main>
      <h1 className="portfolio">My Portfolio</h1>

      <div className="project">
        <a href="/">
          <img
            src="/website.png"
            alt="Screenshot of Personal Website Home Page"
            width={800}
          />
        </a>

        <div className="project-details">
          <p className="project-name">Personal Website</p>
          <p className="project-description">
            This is my personal website built with HTML and CSS. It showcases
            my projects, blog, and contact information.
          </p>
          <a href="/">Learn More</a>
        </div>
      </div>

      <footer className="footer">
        © 2025 Srinithi's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}