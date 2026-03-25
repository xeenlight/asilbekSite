// src/components/About/About.jsx

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import aboutImage from "../../assets/images/asilbekAbout2.png";

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.about} id="about">

      <motion.div
        className={styles.aboutCard}
        style={{ backgroundImage: `url(${aboutImage})` }} // 🔥 фон
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* затемнение */}
        <div className={styles.overlay}></div>

        <div className={styles.content}>

          <div className={styles.left}>
            <h1 className={styles.title}>
              {t('about.hey')}{" "}
              <span className={styles.name}>{t('about.name')}</span>
            </h1>

            <p className={styles.intro}>
              {t('about.intro')}
            </p>

            <div className={styles.story}>
              <p>{t('about.story1')}</p>
              <p>{t('about.story2')}</p>
              <p>{t('about.story3')}</p>
            </div>

            <a href="/about" className={styles.readMore}>
              {t('about.readFull')} →
            </a>
          </div>

        </div>

      </motion.div>

      {/* CTA */}
      <div className={styles.cta}>
        <button className={styles.ctaButton}>
          {t('about.watchVideos')}
        </button>
        <button className={styles.ctaButton}>
          {t('about.readArticles')}
        </button>
        <button className={styles.ctaButton}>
          {t('about.readBook')}
        </button>
      </div>

    </section>
  );
}

export default About;