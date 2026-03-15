import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Content.module.css";

function Content() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* TITLE */}
          <div className={styles.titleBox}>
            <h2 className={styles.title}>
              {t("help.title")} <span className={styles.accent}>?</span>
            </h2>
          </div>

          {/* YOUTUBE BIG */}
          <motion.div
            className={`${styles.card} ${styles.youtube}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <div className={styles.iconWrapper}>
              <img src="/assets/icons/laptop-play.svg" className={styles.icon}/>
            </div>

            <h3>{t("help.cards.youtube.title")}</h3>
            <p>{t("help.cards.youtube.desc")}</p>

            <a href="#" className={styles.link}>
              {t("help.getStarted")} →
            </a>
          </motion.div>

          {/* PRODUCTIVITY */}
          <motion.div
            className={`${styles.card} ${styles.productivity}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay:.1 }}
          >
            <div className={styles.iconWrapper}>
              <img src="/assets/icons/youtube-play.svg" className={styles.icon}/>
            </div>

            <h3>{t("help.cards.productivity.title")}</h3>
            <p>{t("help.cards.productivity.desc")}</p>

            <a href="#" className={styles.link}>
              {t("help.getStarted")} →
            </a>
          </motion.div>

          {/* BUSINESS */}
          <motion.div
            className={`${styles.card} ${styles.business}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay:.2 }}
          >
            <div className={styles.iconWrapper}>
              <img src="/assets/icons/money-bag.svg" className={styles.icon}/>
            </div>

            <h3>{t("help.cards.business.title")}</h3>
            <p>{t("help.cards.business.desc")}</p>

            <a href="#" className={styles.link}>
              {t("help.getStarted")} →
            </a>
          </motion.div>

          {/* GRADES */}
          <motion.div
            className={`${styles.card} ${styles.grades}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay:.3 }}
          >
            <div className={styles.iconWrapper}>
              <img src="/assets/icons/notebook.svg" className={styles.icon}/>
            </div>

            <h3>{t("help.cards.grades.title")}</h3>
            <p>{t("help.cards.grades.desc")}</p>

            <a href="#" className={styles.link}>
              {t("help.getStarted")} →
            </a>
          </motion.div>

          {/* MORE */}
          <motion.div
            className={`${styles.card} ${styles.more}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay:.4 }}
          >
            <h3>...and more!</h3>

            <a href="#" className={styles.link}>
              Explore all content →
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Content;