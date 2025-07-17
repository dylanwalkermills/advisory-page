import Link from "next/link";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>East Bay Advisor Finder</h1>
          <nav className={styles.nav}>
            <Link href="/find-advisor">Find Advisor</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Have questions or need assistance? Reach out to our team and we’ll
              be happy to help you connect with the right financial advisor.
            </p>
          </div>
        </section>
        <section className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <strong>Email:</strong> support@eastbayadvisorfinder.com
            </div>
            <div className={styles.contactItem}>
              <strong>Phone:</strong> (555) 987-6543
            </div>
          </div>
          <form
            className={styles.form}
            style={{ marginTop: "2rem", maxWidth: 500 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Your Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="you@email.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.input}
                rows={4}
                placeholder="How can we help you?"
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>East Bay Advisor Finder</h4>
            <p>
              Connecting you with trusted financial professionals in the East
              Bay Area
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <Link href="/find-advisor">Find Advisor</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <Link href="/help">Help Center</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 East Bay Advisor Finder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
