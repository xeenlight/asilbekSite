import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import styles from "./Content.module.css";
import IconTg from "../../assets/images/IconTg.png";
import IconYT from "../../assets/images/IconYT.png";
import IconOff from "../../assets/images/IconOff.png";
function Content() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* TITLE */}
          <div className={styles.titleBox}>
            <h2 className={styles.title}>
              <Trans
                i18nKey="help.title"
                components={{
                  circle: <span className={styles.handCircle} />,
                }}
              />
            </h2>
          </div>

          {/* YOUTUBE BIG */}
          <motion.div
            className={`${styles.card} ${styles.youtube}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.iconWrapper}>
              <img src={IconOff} className={styles.icon} alt="Offline Classes" />
            </div>

            <h3>{t("help.cards.youtube.title")}</h3>
            <p className={styles.pCon}>
              {t("help.cards.youtube.desc")}
            </p>

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
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.iconWrapper}>
              <img src={IconYT} className={styles.icon} alt="YouTube" />
            </div>

            <h3>{t("help.cards.productivity.title")}</h3>
            <p className={styles.pCon}>
              {t("help.cards.productivity.desc")}
            </p>

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
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <img src={IconTg} className={styles.icon} alt="B9Lab" />
            </div>

            <h3>{t("help.cards.business.title")}</h3>
            <p className={styles.pCon}>
              {t("help.cards.business.desc")}
            </p>

            <a href="#" className={styles.link}>
              {t("help.getStarted")} →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Content;