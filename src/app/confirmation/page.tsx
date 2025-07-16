import Link from "next/link";
import styles from "./page.module.css";

export default function Confirmation() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>AdvisorMatch</h1>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.successSection}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.successTitle}>Thank You!</h1>
            <p className={styles.successMessage}>
              Your information has been submitted successfully. We&apos;ll match
              you with the perfect financial advisor based on your needs and
              preferences.
            </p>
            <div className={styles.nextSteps}>
              <h2>Next Steps:</h2>
              <ol>
                <li>
                  We&apos;ll review your information and match you with
                  qualified advisors
                </li>
                <li>
                  You&apos;ll receive an email with advisor recommendations
                  within 24 hours
                </li>
                <li>
                  Schedule a free consultation with your matched advisor below
                </li>
              </ol>
            </div>
          </div>

          <div className={styles.calendlySection}>
            <h2 className={styles.calendlyTitle}>
              Schedule Your Free Consultation
            </h2>
            <p className={styles.calendlySubtitle}>
              Book a 30-minute consultation with one of our certified financial
              advisors. No obligation, just expert advice to help you achieve
              your financial goals.
            </p>

            <div className={styles.calendlyContainer}>
              {/* Replace with your actual Calendly iframe URL */}
              <iframe
                src="https://calendly.com/your-calendly-link/30min"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a consultation"
                className={styles.calendlyIframe}
              ></iframe>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h2>Need Help?</h2>
            <p>
              If you have any questions or need assistance, don&apos;t hesitate
              to reach out:
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Email:</strong> support@advisormatch.com
              </div>
              <div className={styles.contactItem}>
                <strong>Phone:</strong> (555) 123-4567
              </div>
              <div className={styles.contactItem}>
                <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
              </div>
            </div>
          </div>

          <div className={styles.backToHome}>
            <Link href="/" className={styles.backButton}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>AdvisorMatch</h4>
            <p>Connecting you with trusted financial professionals</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <Link href="/privacy">Privacy Policy</Link>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 AdvisorMatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
