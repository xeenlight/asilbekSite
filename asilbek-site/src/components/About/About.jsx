// src/components/About/About.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import yourPhoto from "../../assets/images/asilbek.jpg"; // ← замени на путь к своему фото


function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            {t('about.hey')}, я <span className={styles.name}>{t('about.name')}</span>
          </h1>

          <p className={styles.intro}>
            {t('about.intro')}
          </p>

          <div className={styles.story}>
            <p>{t('about.story1')}</p>
            <p>{t('about.story2')}</p>
            <p>{t('about.story3')}</p>
            <p className={styles.thanks}>
              {t('about.thanks')} <span className={styles.heart}></span>
            </p>
          </div>

          <a href="#full-story" className={styles.readMore}>
            {t('about.readFull')} →
          </a>
        </motion.div>

        {/* Изображения с изогнутыми линиями */}
        <div className={styles.images}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              src={yourPhoto} // ← фото на сцене/презентации
              alt="Asilbek speaking"
              className={styles.image}
            />
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={yourPhoto} // ← фото с книгой или сертификатом
              alt="Asilbek with book"
              className={styles.image}
            />
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <img
              src={yourPhoto} // ← портретное фото
              alt="Asilbek portrait"
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>

      {/* CTA кнопки внизу */}
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