"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    zipcode: "",
    email: "",
    investmentStage: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "zipcode") {
      // Only allow 5 digits for zipcode
      const zipValue = value.replace(/\D/g, "").slice(0, 5);
      setFormData((prev) => ({ ...prev, [name]: zipValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // n8n webhook URL
      const webhookUrl =
        "https://dwmills.app.n8n.cloud/webhook-test/44a8630a-6db5-464e-80a3-e817a4fd9fae";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          zipcode: formData.zipcode,
          email: formData.email,
          investmentStage: formData.investmentStage,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          source: "advisor-match-landing",
        }),
      });

      if (response.ok) {
        // Redirect to confirmation page
        window.location.href = "/confirmation";
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>East Bay Advisor Finder</h1>
          <nav className={styles.nav}>
            <a href="#find">Find Advisor</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Find Your Perfect Financial Advisor
            </h1>
            <p className={styles.heroSubtitle}>
              Connect with certified financial professionals who can help you
              achieve your financial goals
            </p>

            {/* Search Section */}
            <div className={styles.searchSection}>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="Enter your location or zip code"
                  className={styles.searchInput}
                />
                <button className={styles.searchButton}>Find Advisors</button>
              </div>
              <div className={styles.searchFilters}>
                <select className={styles.filterSelect}>
                  <option>Specialization</option>
                  <option>Retirement Planning</option>
                  <option>Investment Management</option>
                  <option>Tax Planning</option>
                  <option>Estate Planning</option>
                </select>
                <select className={styles.filterSelect}>
                  <option>Experience Level</option>
                  <option>1-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>
              Get Matched with a Financial Advisor
            </h2>
            <p className={styles.formSubtitle}>
              Tell us about your financial goals and we&apos;ll connect you with
              the right advisor
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="zipcode" className={styles.label}>
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="12345"
                    maxLength={5}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="investmentStage" className={styles.label}>
                  Investment Stage *
                </label>
                <select
                  id="investmentStage"
                  name="investmentStage"
                  value={formData.investmentStage}
                  onChange={handleInputChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select investment stage</option>
                  <option value="early">Early Stage</option>
                  <option value="mid">Mid Stage</option>
                  <option value="late">Late Stage</option>
                </select>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Matched with an Advisor"}
              </button>
            </form>
          </div>
        </section>

        {/* Featured Advisors Section */}
        <section className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Featured Financial Advisors</h2>
          <div className={styles.advisorsGrid}>
            {/* Advisor Card 1 */}
            <div className={styles.advisorCard}>
              <div className={styles.advisorImage}>
                <div className={styles.avatar}>JD</div>
              </div>
              <div className={styles.advisorInfo}>
                <h3 className={styles.advisorName}>Jennifer Davis</h3>
                <p className={styles.advisorTitle}>
                  Certified Financial Planner
                </p>
                <p className={styles.advisorLocation}>📍 New York, NY</p>
                <div className={styles.advisorSpecialties}>
                  <span className={styles.specialty}>Retirement Planning</span>
                  <span className={styles.specialty}>
                    Investment Management
                  </span>
                </div>
                <div className={styles.advisorRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>(127 reviews)</span>
                </div>
                <button className={styles.contactButton}>
                  Contact Jennifer
                </button>
              </div>
            </div>

            {/* Advisor Card 2 */}
            <div className={styles.advisorCard}>
              <div className={styles.advisorImage}>
                <div className={styles.avatar}>MR</div>
              </div>
              <div className={styles.advisorInfo}>
                <h3 className={styles.advisorName}>Michael Rodriguez</h3>
                <p className={styles.advisorTitle}>Senior Financial Advisor</p>
                <p className={styles.advisorLocation}>📍 Los Angeles, CA</p>
                <div className={styles.advisorSpecialties}>
                  <span className={styles.specialty}>Tax Planning</span>
                  <span className={styles.specialty}>Estate Planning</span>
                </div>
                <div className={styles.advisorRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>(89 reviews)</span>
                </div>
                <button className={styles.contactButton}>
                  Contact Michael
                </button>
              </div>
            </div>

            {/* Advisor Card 3 */}
            <div className={styles.advisorCard}>
              <div className={styles.advisorImage}>
                <div className={styles.avatar}>SW</div>
              </div>
              <div className={styles.advisorInfo}>
                <h3 className={styles.advisorName}>Sarah Williams</h3>
                <p className={styles.advisorTitle}>
                  Wealth Management Specialist
                </p>
                <p className={styles.advisorLocation}>📍 Chicago, IL</p>
                <div className={styles.advisorSpecialties}>
                  <span className={styles.specialty}>High Net Worth</span>
                  <span className={styles.specialty}>Portfolio Management</span>
                </div>
                <div className={styles.advisorRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>(156 reviews)</span>
                </div>
                <button className={styles.contactButton}>Contact Sarah</button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Search & Filter</h3>
              <p>
                Enter your location and preferences to find qualified advisors
                in your area
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Take a 1-Minute Survey</h3>
              <p>
                We collect approximate financial information solely to connect
                you with a financial professional. We don&apos;t sell or share
                your data. You may request deletion at any time.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Connect & Consult</h3>
              <p>
                Schedule a free consultation to discuss your financial goals
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>AdvisorMatch</h4>
            <p>Connecting you with trusted financial professionals</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <a href="#find">Find Advisor</a>
            <a href="#about">About Us</a>
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
