// src/components/Hero/Hero.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import yourPhoto from "../../assets/images/asilbek.jpg"; // ← замени на путь к своему фото

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Левая колонка: фото + приветствие */}
        <div className={styles.left}>
          <motion.div
            className={styles.photoWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={yourPhoto}
              alt="Асилбек Махкамов"
              className={styles.photo}
            />
          </motion.div>

          <motion.div
            className={styles.greeting}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2>
              {t('hero.hey')} <span className={styles.wave}>👋</span>
            </h2>
            <h1>{t('hero.title')}</h1>
          </motion.div>
        </div>

        {/* Правая колонка: расширенное описание опыта */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <p className={styles.intro}>{t('hero.intro')}</p>

          <div className={styles.aboutTeaching}>
            <h3>{t('hero.teachingTitle')}</h3>

            <p className={styles.description}>
              {t('hero.teachingText1')}
            </p>

            <p className={styles.description}>
              {t('hero.teachingText2')}
            </p>

            <ul className={styles.highlights}>
              <li>{t('hero.highlight1')}</li>
              <li>{t('hero.highlight2')}</li>
              <li>{t('hero.highlight3')}</li>
              <li>{t('hero.highlight4')}</li>
            </ul>

            <p className={styles.description}>
              {t('hero.teachingText3')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Блок подписки на Telegram — теперь ПОД двумя колонками, на всю ширину */}
      <motion.div
        className={styles.subscribeSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.9 }}
      >
        <div className={styles.subscribeBox}>
          <h3>{t('hero.subscribeTitle')}</h3>
          <p className={styles.subscribeText}>
            {t('hero.subscribeText')}
          </p>

          <form className={styles.form}>

            <motion.button
              type="submit"
              className={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.subscribeButton')}
            </motion.button>
          </form>

          <p className={styles.note}>
            {t('hero.note')}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;