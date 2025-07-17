import Link from "next/link";
import styles from "../page.module.css";

export default function Terms() {
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
            <h1 className={styles.heroTitle}>Terms of Service</h1>
            <p className={styles.heroSubtitle}>
              Please read these terms carefully before using East Bay Advisor
              Finder.
            </p>
          </div>
        </section>
        <section className={styles.howItWorks}>
          <h2 className={styles.sectionTitle}>Key Terms</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <h3>Not Legal or Financial Advice</h3>
              <p>
                Information provided on this site is for informational purposes
                only and does not constitute legal or financial advice.
              </p>
            </div>
            <div className={styles.step}>
              <h3>User Responsibilities</h3>
              <p>
                Users are responsible for providing accurate information and for
                their own financial decisions.
              </p>
            </div>
            <div className={styles.step}>
              <h3>Service Availability</h3>
              <p>
                We strive to provide uninterrupted service but do not guarantee
                availability at all times.
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
