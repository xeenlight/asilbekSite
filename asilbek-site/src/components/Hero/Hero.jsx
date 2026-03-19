// src/components/Hero/Hero.jsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import asilbekMain from "../../assets/images/asilbekMain.png";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>

      <div className={styles.noise}></div>
      <div className={styles.gradientOrb}></div>
      <div className={styles.grid}></div>

      <motion.div
        className={styles.heroCard}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className={styles.content}>

          {/* LEFT */}
          <div className={styles.left}>

            <motion.div
              className={styles.photoWrapper}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <img src={asilbekMain} className={styles.photo} />
              <div className={styles.ring}></div>
              <div className={styles.ring2}></div>
            </motion.div>

            <h2 className={styles.hey}>
              {t("hero.hey")} <span className={styles.wave}>👋</span>
            </h2>

            <h1 className={styles.title}>
  {t("hero.title")}
</h1>

          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <p className={styles.intro}>{t("hero.intro")}</p>

            <ul className={styles.highlights}>
              <li>{t("hero.highlight1")}</li>
              <li>{t("hero.highlight2")}</li>
              <li>{t("hero.highlight3")}</li>
              <li>{t("hero.highlight4")}</li>
            </ul>
          </div>

        </div>

        {/* SUBSCRIBE */}
        <div className={styles.subscribe}>
          <h3>{t("hero.subscribeTitle")}</h3>
          <p>{t("hero.subscribeText")}</p>

          <button className={styles.button}>
            {t("hero.subscribeButton")}
          </button>
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;