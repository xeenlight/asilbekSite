// src/components/Hero/Hero.jsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import bgImage from "../../assets/images/asilbekMain2Big.png";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* OVERLAY затемнение */}
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

        <h1 className={styles.title}>
          {t("hero.title")}
        </h1>

        <p className={styles.intro}>
          {t("hero.intro")}
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;