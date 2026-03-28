// src/components/YouTubeHero/YouTubeHero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./YouTubeHero.module.css";
import asilbek1 from "../../assets/images/asilbekMain2.png";

function YouTubeHero() {
  const { t } = useTranslation();

  const [videos, setVideos] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const recommendedVideos = [
    { id: "bI3bAl5j9Qg" },
    { id: "uMFOSvXz80I" },
    { id: "qnzy1Wre4to" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CHANNEL_ID = "UCq3PlGB0_e6jTc9Jr2Al7LQ";
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const res = await fetch(proxyUrl);
        const data = await res.json();

        if (data.items) {
          const filtered = data.items.filter(item => {
            const id = item.link.split("v=")[1]?.split("&")[0];
            return !recommendedVideos.some(v => v.id === id);
          });
          setVideos(filtered.slice(0, 3));
        }

        const rec = await Promise.all(
          recommendedVideos.map(async (v) => {
            try {
              const r = await fetch(
                `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${v.id}&format=json`
              );
              const j = await r.json();
              return { id: v.id, title: j.title };
            } catch {
              return { id: v.id, title: "Видео" };
            }
          })
        );

        setRecommended(rec);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const getId = (link) => link.split("v=")[1]?.split("&")[0];

  return (
    <section className={styles.section}>

      {/* ОБЩИЙ КОНТЕЙНЕР */}
      <div className={styles.wrapper}>

        {/* ===== BLOCK 1 ===== */}
        <div className={styles.block}>

          <div className={styles.videoSide}>
            <h2 className={styles.title}>{t("progress.latest")}</h2>

            <div className={styles.videoGrid}>
              {videos.map((video, i) => {
                const id = getId(video.link);

                return (
                  <motion.div
                    key={id}
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={styles.player}>
                      <iframe
                        src={`https://www.youtube.com/embed/${id}?rel=0`}
                        title={video.title}
                        allowFullScreen
                      />
                    </div>

                    <div className={styles.info}>
                      <p>{video.title}</p>
                      <small>
                        {new Date(video.pubDate).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </small>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className={`${styles.imageSide} ${styles.image1}`}>
            <img src={asilbek1} alt="Asilbek" />
          </div>

        </div>

        {/* ===== BLOCK 2 ===== */}
        <div className={styles.block}>

          <div className={`${styles.imageSide} ${styles.image2}`}>
            <img src={asilbek1} alt="Asilbek" />
          </div>

          <div className={styles.videoSide}>
            <h2 className={styles.title}>{t("progress.recommended")}</h2>

            <div className={styles.videoGrid}>
              {recommended.map((video, i) => (
                <motion.div
                  key={video.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.player}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>

                  <div className={styles.info}>
                    <p>{video.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default YouTubeHero;