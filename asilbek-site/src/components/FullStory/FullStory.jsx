// src/components/FullStory/FullStory.jsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./FullStory.module.css";
import asilbekStory from "../../assets/images/asilbekStory.png";
import asilbekStory3 from "../../assets/images/asilbekStory3.png";
import asilbekStory4 from "../../assets/images/asilbekStory4.png";

function FullStory() {
  const { t } = useTranslation();

  return (
    <section className={styles.storySection} id="full-story">
      <div className={styles.container}>

        {/* TITLE */}
        <h2 className={styles.title}>
          {t("story.title")}
        </h2>
      <div className={styles.FullStory}>
        {/* BLOCK 1 */}
        <div className={styles.row}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p>{t("story.part1")}</p>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img src={asilbekStory} className={styles.image} />
          </motion.div>
        </div>

        {/* BLOCK 2 (reverse) */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p>{t("story.part2")}</p>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img src={asilbekStory4} className={styles.image} />
          </motion.div>
        </div>

        {/* BLOCK 3 */}
        <div className={styles.row}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p>{t("story.part3")}</p>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img src={asilbekStory3} className={styles.image} />
          </motion.div>
        </div>

        {/* BLOCK 4 */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p>{t("story.part4")}</p>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img src={asilbekStory4} className={styles.image} />
          </motion.div>
        </div>

        {/* BLOCK 5 */}
        <div className={styles.row}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p>{t("story.part5")}</p>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img src={asilbekStory} className={styles.image} />
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default FullStory;