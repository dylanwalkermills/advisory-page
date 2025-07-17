import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
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
            <h1 className={styles.heroTitle}>About East Bay Advisor Finder</h1>
            <p className={styles.heroSubtitle}>
              Our mission is to connect individuals and families in the East Bay
              Area with trusted, certified financial advisors. We believe in
              transparency, integrity, and personalized service to help you
              achieve your financial goals.
            </p>
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
