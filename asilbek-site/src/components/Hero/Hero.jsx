import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import styles from "./Hero.module.css";

function Hero() {
  const { t, i18n } = useTranslation();

  const isUzbek = i18n.language === 'uz' || i18n.language.startsWith('uz');

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className={styles.hey}>
          {t("hero.hey")} <span className={styles.wave}>👋</span>
        </h2>

        <h1 
          className={`${styles.title} ${isUzbek ? styles.titleSmall : ''}`}
        >
          {t("hero.title")}
        </h1>

        <p className={styles.intro}>
          <Trans
            i18nKey="hero.intro"
            components={{
              highlight: <span className={styles.highlight} />,
            }}
          />
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;