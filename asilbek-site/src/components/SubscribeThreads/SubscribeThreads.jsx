// src/components/SubscribeThreads/SubscribeThreads.jsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./SubscribeThreads.module.css";
import asilbek from "../../assets/images/thr.png";

function SubscribeThreads() {
  const { t } = useTranslation();

  const threads = [
    "А вы тоже заметили, сколько стало «IELTS-гуру» в интернете? 👀 Какой самый бесполезный совет по IELTS вы слышали?",
    "Сколько часов в день реально нужно готовиться к IELTS? 🤔 И есть ли вообще «идеальное» количество?",
    "Правда ли, что без идеального английского нельзя сдать IELTS на 7+? 💭 Или это просто миф?"
  ];

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

        {/* RIGHT — CONTENT */}
        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

<h2 className={styles.title}>
  {t("threads.title.before")}{" "}
  <span className={styles.accent}>
    {t("threads.title.accent")}
  </span>{" "}
  {t("threads.title.after")}
</h2>

          <p className={styles.subtitle}>
            {t("threads.subtitle")}
          </p>

          {/* THREADS LIST */}
          <div className={styles.threadList}>
            {threads.map((item, i) => (
              <motion.div
                key={i}
                className={styles.threadItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <a
            href="https://www.threads.net/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            {t("threads.button")}
          </a>

          <p className={styles.note}>
            {t("threads.note")}
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default SubscribeThreads;