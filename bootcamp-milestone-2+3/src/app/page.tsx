// You can name the function within page.tsx anything you want.
import Link from "next/link";
export default function Home() {
  return (
    <div>
      {/* Head metadata (title, fonts, etc.) should go in layout.tsx or <Head> */}
      <nav className="navbar">
        <h1 className="logo">
          
        </h1>
      </nav>

      <main>
        <h1 className="nostyle">
         <p></p>Welcome!
          </h1>
        <div className="about">
          <div className="about-image">
            <img
              src="/IMG_3732.jpg"
              alt="photo of myself"
              width="300"
            />
          </div>
          <div className="about-text">
            Hello World! My name is <strong>Srinithi Doddapaneni</strong> and I
            am a first-year <em>Computer Science</em> major.
            <br />
            I&apos;m from the Bay Area, specifically <em>San Ramon</em>. I love
            hiking, playing basketball for fun, spending time in nature,
            listening to music, playing chess, and solving puzzles. One fun fact
            about me is that I&apos;ve kept every single letter written to me
            since 1st grade.
            <p>
              I am excited for this opportunity with Hack4Impact and to build
              projects that make a positive impact for nonprofits in SLO.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        © 2025 Srinithi's Personal Website | All Rights Reserved
      </footer>
    </div>
  ); 
}
