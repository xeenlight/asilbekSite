// src/components/Progress/Progress.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Progress.module.css';

function Progress() {
  const { t } = useTranslation();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Канал @StopGameRu
        const CHANNEL_ID = 'UCq7JZ8ATgQWeu6sDM1czjhg';
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        
        // Бесплатный публичный парсер RSS → JSON
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Ошибка сети');

        const data = await response.json();

        if (data.status === 'ok' && data.items) {
          // Берём последние 6 видео (можно изменить)
          setVideos(data.items.slice(0, 6));
        } else {
          throw new Error('Нет видео в ответе');
        }
      } catch (err) {
        console.error('Ошибка при загрузке видео:', err);
        setError('Не удалось загрузить видео. Попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();

    // Опционально: обновлять каждые 3 часа (10800000 мс)
    // const interval = setInterval(fetchVideos, 10800000);
    // return () => clearInterval(interval);
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
          {/* Можно оставить твои старые периоды, а ниже добавить блок с видео */}
          {/* Или полностью заменить timeline на видео, как в примере ниже */}

          {/* Пример: показываем последние видео как отдельный блок */}
          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >


            {loading ? (
              <p>Загружаем свежие видео...</p>
            ) : error ? (
              <p style={{ color: 'red' }}>{error}</p>
            ) : videos.length === 0 ? (
              <p>Видео пока не найдены</p>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                marginTop: '20px'
              }}>
                {videos.map((video, index) => {
                  // Парсим videoId из ссылки (типичный формат YouTube RSS)
                  const videoId = video.link.split('v=')[1]?.split('&')[0] || video.id.split(':').pop();

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
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div style={{ padding: '12px 16px' }}>
                        <p style={{ 
                          fontWeight: 600, 
                          margin: '0 0 8px 0',
                          fontSize: '1.05rem',
                          lineHeight: 1.4,
                          color: '#eee',
                        }}>
                          {video.title}
                        </p>
                        <small style={{ color: '#aaa', display: 'block' }}>
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
          </motion.div>

          {/* Если хочешь — верни сюда свои старые периоды 2020–2023 и 2024–2025 */}
          {/* ... твои оригинальные timeline.map(...) ... */}

        </div>
      </div>
    </section>
  );
}

export default Progress;