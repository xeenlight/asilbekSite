// src/components/SubscribeTG/SubscribeTG.jsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./SubscribeTGContent.module.css";
import qr from "../../assets/images/qr.png";
import asilbek from "../../assets/images/asilbekAbout.png"; // 🔥 твоя фотка

function SubscribeTG() {
  const { t } = useTranslation();

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>

        {/* LEFT — PHOTO */}
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.photoWrapper}>
            <img src={asilbek} alt="Asilbek" className={styles.photo} />
          </div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className={styles.title}>
            {t("subscribe.title.part1")}{" "}
            <span className={styles.accent}>
              {t("subscribe.title.accent")}
            </span>
          </h2>

          <p className={styles.subtitle}>
            {t("subscribe.subtitle")}
          </p>

          <div className={styles.reviews}>
            ⭐⭐⭐⭐⭐
            <span>{t("subscribe.reviews")}</span>
          </div>

          {/* QR */}
<div className={styles.actions}>
  <div className={styles.qrWrapper}>
    <img src={qr} alt="QR" className={styles.qr} />
  </div>

  <a
    href="https://t.me/ieltsdelivered"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.button}
  >
    {t("subscribe.button")}
  </a>
</div>

          <p className={styles.note}>
            {t("subscribe.note")}
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default SubscribeTG;