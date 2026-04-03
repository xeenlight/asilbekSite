// src/components/Progress/Progress.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Progress.module.css';

function Progress() {
  const { t } = useTranslation();

  const [videos, setVideos] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const recommendedVideos = [
    { id: 'bI3bAl5j9Qg' },
    { id: 'uMFOSvXz80I' },
    { id: 'qnzy1Wre4to' },
  ];

  useEffect(() => {
    const fetchAll = async () => {

      // 🔥 1. РЕКОМЕНДОВАННЫЕ
      try {
        const recWithTitles = await Promise.all(
          recommendedVideos.map(async (video) => {
            try {
              const res = await fetch(
                `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`
              );
              const json = await res.json();

              return {
                id: video.id,
                title: json.title,
              };
            } catch {
              return {
                id: video.id,
                title: 'Видео',
              };
            }
          })
        );

        setRecommended(recWithTitles);
      } catch (e) {
        console.error("Ошибка recommended", e);
      }

      // 🔥 2. НОВЫЕ ВИДЕО
      try {
        const CHANNEL_ID = 'UCDCjzYlOubu8Zi2FnkZ8oig';
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(proxyUrl);
        const data = await response.json();

        // 💥 защита от дохлого прокси
        if (!data.items || data.status !== 'ok') {
          throw new Error('Proxy died');
        }

        const filtered = data.items.filter(item => {
          const id = item.link.split('v=')[1]?.split('&')[0];
          return !recommendedVideos.some(v => v.id === id);
        });

        setVideos(filtered.slice(0, 3));
      } catch (err) {
        console.error("Ошибка RSS", err);
        setError(true);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <section className={styles.progressSection} id="journey">
      <div className={styles.container}>

        <motion.h2
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('progress.title')}
        </motion.h2>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>

            {/* 🔥 РЕКОМЕНДОВАННЫЕ */}
            <h3 className={styles.hRecommend}>
              {t('progress.recommended')}
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {recommended.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#111',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                      title={video.title}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>

                  <div style={{ padding: '12px 16px' }}>
                    <p style={{
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: '#eee'
                    }}>
                      {video.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 🔥 НОВЫЕ ВИДЕО */}
            {!error && videos.length > 0 && (
              <>
                <h3 className={styles.hRecommend}>
                  {t('progress.latest')}
                </h3>

                {loading ? (
                  <p>{t('progress.loading')}</p>
                ) : (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                  }}>
                    {videos.map((video, index) => {
                      const videoId =
                        video.link.split('v=')[1]?.split('&')[0];

                      return (
                        <motion.div
                          key={videoId || index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            background: '#111',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
                          }}
                        >
                          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                              }}
                              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                              title={video.title}
                              frameBorder="0"
                              allowFullScreen
                            />
                          </div>

                          <div style={{ padding: '12px 16px' }}>
                            <p style={{
                              fontWeight: 600,
                              marginBottom: '8px',
                              fontSize: '1.05rem',
                              color: '#eee'
                            }}>
                              {video.title}
                            </p>

                            <small style={{ color: '#aaa' }}>
                              {new Date(video.pubDate).toLocaleDateString('ru-RU', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </small>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Progress;