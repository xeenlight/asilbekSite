// src/components/About/About.jsx

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import yourPhoto from "../../assets/images/asilbek.jpg";

function About() {
  const { t } = useTranslation();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* TEXT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            {t('about.hey')}, я{" "}
            <span className={styles.name}>{t('about.name')}</span>
          </h1>

          <p className={styles.intro}>
            {t('about.intro')}
          </p>

          <div className={styles.story}>
            <p>{t('about.story1')}</p>
            <p>{t('about.story2')}</p>
            <p>{t('about.story3')}</p>
            <p className={styles.thanks}>
              {t('about.thanks')}
            </p>
          </div>

          <a href="#full-story" className={styles.readMore}>
            {t('about.readFull')} →
          </a>
        </motion.div>

        {/* FLOATING IMAGES */}
        <div 
          className={styles.images}
          onMouseMove={handleMouseMove}
        >

          <motion.div
            className={`${styles.imageWrapper} ${styles.img1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={yourPhoto} className={styles.image} />
          </motion.div>

          <motion.div
            className={`${styles.imageWrapper} ${styles.img2}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src={yourPhoto} className={styles.image} />
          </motion.div>

          <motion.div
            className={`${styles.imageWrapper} ${styles.img3}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <img src={yourPhoto} className={styles.image} />
          </motion.div>

        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('about.watchVideos')}
        </motion.button>

        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('about.readArticles')}
        </motion.button>

        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('about.readBook')}
        </motion.button>
      </div>

    </section>
  );
}

export default About;