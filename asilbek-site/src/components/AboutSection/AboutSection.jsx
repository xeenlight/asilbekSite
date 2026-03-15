// src/components/AboutSection/AboutSection.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './AboutSection.module.css';

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>

        {/* Главный заголовок + фото */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              {t('aboutSection.hey')}
            </h1>
            <motion.img
              src="/assets/images/asilbek-portrait.jpg"
              alt="Асилбек Махкамов"
              className={styles.portrait}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <p className={styles.subtitle}>
            {t('aboutSection.subtitle')}
          </p>
        </div>

        {/* Quick Facts */}
        <div className={styles.factsSection}>
          <h2 className={styles.factsTitle}>
            {t('aboutSection.quickFacts')}
          </h2>

          <div className={styles.factsGrid}>
            {/* Левая колонка */}
            <div className={styles.factsColumn}>
              <motion.div 
                className={styles.factItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className={styles.check}>✓</span>
                <p>{t('aboutSection.fact1')}</p>
              </motion.div>

              <motion.div 
                className={styles.factItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className={styles.check}>✓</span>
                <p>{t('aboutSection.fact2')}</p>
              </motion.div>

              <motion.div 
                className={styles.factItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className={styles.check}>✓</span>
                <p>{t('aboutSection.fact3')}</p>
              </motion.div>
            </div>

            {/* Правая колонка */}
            <div className={styles.factsColumn}>
              <motion.div 
                className={styles.factItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className={styles.check}>✓</span>
                <p>{t('aboutSection.fact4')}</p>
              </motion.div>

              <motion.div 
                className={styles.factItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className={styles.check}>✓</span>
                <p>{t('aboutSection.fact5')}</p>
              </motion.div>

              <motion.div 
                className={styles.factItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className={styles.check}>✓</span>
                <p>{t('aboutSection.fact6')}</p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;