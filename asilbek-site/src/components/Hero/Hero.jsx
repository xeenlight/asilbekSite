// src/components/Hero/Hero.jsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import asilbekMain from "../../assets/images/asilbekMain.png";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>

      {/* BACKGROUND GLOW */}
      <div className={styles.bgGlow}></div>

      <motion.div
        className={styles.heroCard}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >

        <div className={styles.content}>

          {/* LEFT */}
          <motion.div 
            className={styles.left}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.photoWrapper}>
              <img src={asilbekMain} className={styles.photo} />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div 
            className={styles.right}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
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

            <ul className={styles.highlights}>
              <li>{t("hero.highlight1")}</li>
              <li>{t("hero.highlight2")}</li>
              <li>{t("hero.highlight3")}</li>
              <li>{t("hero.highlight4")}</li>
            </ul>

          </motion.div>

        </div>

        {/* SUBSCRIBE */}
        <motion.div 
          className={styles.subscribe}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>{t("hero.subscribeTitle")}</h3>
          <p>{t("hero.subscribeText")}</p>

          <button className={styles.button}>
            {t("hero.subscribeButton")}
          </button>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Hero;