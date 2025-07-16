import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>AdvisorMatch</h1>
          <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/privacy">Privacy</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: December 2024</p>

          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              AdvisorMatch ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              financial advisor finder service.
            </p>
            <p>
              By using our service, you consent to the data practices described
              in this policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Location data (city, state, zip code)</li>
              <li>Financial information and preferences</li>
              <li>Communication preferences</li>
              <li>Profile information and preferences</li>
            </ul>

            <h3>2.2 Usage Information</h3>
            <p>
              We automatically collect certain information when you use our
              service:
            </p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Search queries and filters used</li>
              <li>Click patterns and interactions</li>
            </ul>

            <h3>2.3 Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance your
              experience, analyze usage patterns, and provide personalized
              content.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Provide and maintain our financial advisor finder service</li>
              <li>Match you with appropriate financial advisors</li>
              <li>
                Process and facilitate connections between users and advisors
              </li>
              <li>Send notifications and updates about our service</li>
              <li>Improve our service and develop new features</li>
              <li>Analyze usage patterns and trends</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Information Sharing and Disclosure</h2>

            <h3>4.1 With Financial Advisors</h3>
            <p>
              When you request to connect with a financial advisor, we may share
              relevant information with the advisor to facilitate the
              connection.
            </p>

            <h3>4.2 Service Providers</h3>
            <p>
              We may share information with trusted third-party service
              providers who assist us in operating our service, such as:
            </p>
            <ul>
              <li>Hosting and infrastructure providers</li>
              <li>Analytics and marketing services</li>
              <li>Customer support platforms</li>
              <li>Payment processors (if applicable)</li>
            </ul>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law or in response
              to valid legal requests, such as subpoenas or court orders.
            </p>

            <h3>4.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of the transaction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <p>Our security measures include:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage practices</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights and Choices</h2>

            <h3>6.1 Access and Update</h3>
            <p>
              You have the right to access, update, or correct your personal
              information. You can do this through your account settings or by
              contacting us directly.
            </p>

            <h3>6.2 Data Portability</h3>
            <p>
              You may request a copy of your personal information in a
              structured, machine-readable format.
            </p>

            <h3>6.3 Deletion</h3>
            <p>
              You can request deletion of your personal information, subject to
              certain legal and contractual obligations.
            </p>

            <h3>6.4 Opt-out</h3>
            <p>
              You can opt out of marketing communications and certain data
              collection practices through your account settings.
            </p>

            <h3>6.5 Cookies</h3>
            <p>
              You can control cookie settings through your browser preferences.
              However, disabling certain cookies may affect service
              functionality.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              provide our services and comply with legal obligations. The
              retention period varies based on the type of information and the
              purpose for which it was collected.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you believe we have collected such information, please
              contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your information in accordance with this Privacy
              Policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page and updating the "Last updated" date.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Email:</strong> privacy@advisormatch.com
              </p>
              <p>
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 Financial District, New York, NY
                10001
              </p>
            </div>
          </section>
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
            <a href="/">Home</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="/privacy">Privacy Policy</a>
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
