import "../globals.css"; // adjust path as needed

export default function ResumePage() {
  return (
    <>
      
      <main className="resume-main">
        <h1 className="resume-title">My Resume</h1>

        <a className="download-link" href="/Resume-1.png" download>
          Download Resume
        </a>

        {/* Education Section */}
        <section className="section">
          <h2>Education</h2>
          <div className="entry">
            <p className="entry-title">
              <strong>California Polytechnic State University, San Luis Obispo</strong>
            </p>
            <p className="entry-info">
              <em>September 2025 - May 2029</em>
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="section">
          <h2>Work Experience</h2>
          <div className="entry">
            <p className="entry-title"><strong>Mathnasium</strong></p>
            <p className="entry-info"><em>June 2024 - September 2025</em></p>
            <ul>
              <li>
                Tutored 4–8 students at a time in grades K–12. Provided academic
                support aligned to each student’s personalized learning plan.
                Helped with homework and test preparation, building confidence
                through consistency.
              </li>
            </ul>

            <p className="entry-title"><strong>Prepaze Academy</strong></p>
            <p className="entry-info"><em>June 2024</em></p>
            <ul>
              <li>
                Led a summer camp of 15 students (grades 6–8) to improve chess skills.
                Hosted tournaments, developed lesson plans, and analyzed student games.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section side-by-side">
  <div className="column">
    <h2>Skills</h2>
    <ul className="skill-list">
      <li>Python</li>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>C#</li>
    </ul>
  </div>

  <div className="column">
    <h2>Coursework</h2>
    <ul className="course-list">
      <li>Data Structures and Algorithms</li>
      <li>Web Development</li>
      <li>Data Science and AI</li>
      <li>Cybersecurity</li>
      <li>Machine Learning</li>
    </ul>
  </div>
</section>


        {/* Projects Section */}
        <section className="section">
          <h2>Projects</h2>
          <div className="entry">
            <p className="entry-title"><strong>Facial Emotion Detection Reader</strong></p>
            <ul>
              <li>
                Built a project that detects facial emotion in images by
                calculating framing distances between key facial features using
                neural networks and machine learning.
              </li>
            </ul>

            <p className="entry-title"><strong>Earthquake Prediction Chatbot</strong></p>
            <ul>
              <li>
                Developed ML models to build a chatbot that estimates earthquake
                risk based on user location. Utilized HTML to create a website
                to explain data analysis and model-building process.
              </li>
            </ul>

            <p className="entry-title"><strong>Girls Who Code</strong></p>
            <ul>
              <li>Developed five different games that utilized p5play and emphasized user interface.</li>
              <li>Created a cybersecurity project that encrypted passwords.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025 Srinithi's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}

