import "../globals.css"; // adjust path as needed
import Link from "next/link";
export default function ContactPage() {
  return (
    <main>
      <h2 className="contact">Contact Information</h2>
      
    <p>Please enter your information below if you wish to be contacted for any reason!</p>
  

      <form id="contact-form">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="email" id="email" name="email" placeholder="Email" required />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
<p>Below is my contact information:</p>
      <p>
        <strong>Phone: </strong> 9259676996
      </p>
      <p>
        <strong>Email: </strong> d.srinithi@gmail.com
      </p>

      <footer className="footer">
        © 2025 Srinithi's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}

