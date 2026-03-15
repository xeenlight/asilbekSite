// src/components/Progress/Progress.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Progress.module.css';

function Progress() {
  const { t } = useTranslation();

  const timeline = [
    {
      year: "2020 — 2023",
      icon: "👍",
      items: [
        t('progress.period1.item1'),
        t('progress.period1.item2'),
        t('progress.period1.item3'),
      ],
      image: "/assets/images/timeline-2020.jpg",   // ← замени на своё фото
      videoTitle: t('progress.period1.videoTitle')
    },
    {
      year: "2024 — 2025",
      icon: "🌍",
      items: [
        t('progress.period2.item1'),
        t('progress.period2.item2'),
      ],
      image: "/assets/images/timeline-2024.jpg",   // ← замени на своё фото
      videoTitle: t('progress.period2.videoTitle')
    }
  ];

  return (
    <section className={styles.progressSection} id="journey">
      <div className={styles.container}>
        <motion.h2 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('progress.title')}
        </motion.h2>

        <div className={styles.timeline}>
          {timeline.map((period, index) => (
            <motion.div 
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Год и иконка */}
              <div className={styles.yearHeader}>
                <span className={styles.year}>{period.year}</span>
                <span className={styles.icon}>{period.icon}</span>
              </div>

              {/* Контент */}
              <div className={styles.content}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={period.image} 
                    alt={period.year}
                    className={styles.image}
                  />
                  <div className={styles.playOverlay}>
                    <span>▶</span>
                  </div>
                </div>

                <div className={styles.textContent}>
                  {period.items.map((item, i) => (
                    <p key={i} className={styles.text}>{item}</p>
                  ))}
                  <p className={styles.videoLink}>
                    {period.videoTitle} →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Progress;