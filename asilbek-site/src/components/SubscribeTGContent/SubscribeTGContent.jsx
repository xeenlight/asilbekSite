// src/components/SubscribeTG/SubscribeTG.jsx

import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import styles from "./SubscribeTGContent.module.css";
import qr from "../../assets/images/qr.png";

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
  <Trans
    i18nKey="subscribe.title"
    components={{
      accent: <span className={styles.accent} />,
    }}
  />
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