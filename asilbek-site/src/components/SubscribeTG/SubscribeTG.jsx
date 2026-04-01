// src/components/SubscribeTG/SubscribeTG.jsx
import { motion } from "framer-motion";
import styles from "./SubscribeTG.module.css";
import qr from "../../assets/images/qr.png"; 
import { useTranslation, Trans } from "react-i18next";
function SubscribeTG() {
  const { t } = useTranslation();

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
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
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          
          {/* QR (скрывается на мобиле) */}
          <div className={styles.qrWrapper}>
            <img src={qr} alt="QR" className={styles.qr} />
          </div>

          {/* BUTTON */}
          <a
            href="https://t.me/ieltsdelivered"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            {t("subscribe.button")}
          </a>

          <p className={styles.note}>
            {t("subscribe.note")}
          </p>
        </div>

      </div>
    </section>
  );
}

export default SubscribeTG;