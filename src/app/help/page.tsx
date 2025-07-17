import Link from "next/link";
import styles from "../page.module.css";

export default function Help() {
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
            <h1 className={styles.heroTitle}>Help Center</h1>
            <p className={styles.heroSubtitle}>
              Find answers to common questions or get in touch with our support
              team for assistance.
            </p>
          </div>
        </section>
        <section className={styles.howItWorks}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <h3>How does East Bay Advisor Finder work?</h3>
              <p>
                Fill out our form and we’ll match you with certified financial
                advisors based on your needs and location.
              </p>
            </div>
            <div className={styles.step}>
              <h3>Is there a fee to use this service?</h3>
              <p>
                No, our matching service is completely free for individuals
                seeking financial advice.
              </p>
            </div>
            <div className={styles.step}>
              <h3>How soon will I be matched with an advisor?</h3>
              <p>
                You’ll typically receive advisor recommendations within 24 hours
                of submitting your information.
              </p>
            </div>
          </div>
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
