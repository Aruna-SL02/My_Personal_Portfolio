import React, { useState } from 'react'; 
import './About.css'; 
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaTelegram, FaViber, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa'; 
import { FaXTwitter } from 'react-icons/fa6'; 
import { FaGithub } from 'react-icons/fa';

const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "arunasampathlk01@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="about-container">
      <div className="about-content">

        {/* Section 1: The Bio */}
        <section className="bio-section">
          <h1 className="about-title">About Me</h1>
          <h2 className="about-subtitle">Aruna Sampath Liyanaarachchi</h2>
          <p className="about-text">
            I’m <strong>Aruna Sampath Liyanaarachchi</strong>, an undergraduate student at the{" "}
            <strong>
              <a
                href="https://uovt.ac.lk/index.php/sample-page/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                University of Vocational Technology (UoVT)
              </a>
            </strong>
            , currently pursuing a <strong>B.Tech in Software Technology</strong>.
          </p>
          <p className="about-text">
            I am passionate about developing <strong>software applications and full-stack web solutions</strong> that are <strong>scalable, efficient, and user-friendly</strong>. With hands-on experience in <strong>modern web development</strong>, I focus on creating projects that solve real-world problems and provide seamless user experiences.
          </p>
          <p className="about-text">
            I enjoy learning and applying the latest technologies to write <strong>clean, maintainable code</strong> and build <strong>robust applications</strong>. My goal is to continuously grow as a software developer while contributing to meaningful projects in the world of software and web development.
          </p>
          <div className="highlights">
            <div className="highlight-item">🎓 B.Tech Undergraduate</div>
            <div className="highlight-item">💻 Full-Stack Developer</div>
            <div className="highlight-item">⚙️ Software Developer</div>
            <div className="highlight-item">🚀 MERN Enthusiast</div>
          </div>
        </section>

        {/* Section 2: Email Copy Bar */}
        <section className="email-section">
          <div className="email-label">Drop me an email directly:</div>
          <div className={`email-bar ${copied ? "copied" : ""}`} onClick={handleCopyEmail}>
            <div className="email-content">
              <FaEnvelope className="email-icon" />
              <span className="email-address">{email}</span>
            </div>
            <div className="copy-action">
              {copied ? (
                <>
                  <FaCheck className="check-icon" /> <span>Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy /> <span>Copy</span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Section 3: Social Media Hub */}
        <section className="socials-section">
          <h3>Let's Connect</h3>
          <p>Find me on these platforms:</p>
          <div className="social-grid">

            <a
              href="https://linkedin.com/in/aruna-sampath-liyanaarachchi-b90493318"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card linkedin"
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Aruna-SL02"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card github"
            >
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>

            <a
              href="https://wa.me/+94762311146"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card whatsapp"
            >
              <FaWhatsapp className="social-icon" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100042060240235"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card facebook"
            >
              <FaFacebook className="social-icon" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/aruna_sl_02/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card instagram"
            >
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>

            <a 
              href="https://twitter.com/@ARUNASAMPATH01" 
              target="_blank" rel="noopener noreferrer" 
              className="social-card x-twitter"
            > 
              <FaXTwitter className="social-icon" /> 
              <span>X</span> 
            </a>

            <a
              href="viber://chat?number=+94762311146"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card viber"
            >
              <FaViber className="social-icon" />
              <span>Viber</span>
            </a>

            <a
              href="https://t.me/+94762311146"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card telegram"
            >
              <FaTelegram className="social-icon" />
              <span>Telegram</span>
            </a>

          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
