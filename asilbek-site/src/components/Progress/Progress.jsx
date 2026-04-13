// src/components/Progress/Progress.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Progress.module.css';

function YouTubeFacade({ videoId, title }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        background: '#111',
        borderRadius: '12px 12px 0 0',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setIsPlaying(true)}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        loading="lazy"
      />

      {/* Play кнопка */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '68px',
          height: '48px',
          background: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            borderLeft: '18px solid #fff',
            marginLeft: '4px',
          }}
        />
      </div>

      {/* Градиент */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
        }}
      />
    </div>
  );
}

function Progress() {
  const { t } = useTranslation();

  const [recommended, setRecommended] = useState([]);

  const recommendedVideos = [
    { id: 'M3FNjV4br7k' },
  ];

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const recWithTitles = await Promise.all(
          recommendedVideos.map(async (video) => {
            try {
              const res = await fetch(
                `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`
              );
              const json = await res.json();
              return { id: video.id, title: json.title || 'Видео' };
            } catch {
              return { id: video.id, title: 'Рекомендованное видео' };
            }
          })
        );

        setRecommended(recWithTitles);
      } catch (e) {
        console.error("Ошибка recommended", e);
      }
    };

    fetchRecommended();
  }, []);

  return (
    <section className={styles.progressSection} id="journey">
      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>

            {/* Рекомендованные */}
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
                  <YouTubeFacade videoId={video.id} title={video.title} />

                  <div style={{ padding: '12px 16px' }}>
                    <p style={{
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: '#eee',
                      margin: 0
                    }}>
                      {video.title}
                    </p>
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

export default Progress;