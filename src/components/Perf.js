import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Perf.scss';

function Buy() {
  const [t] = useTranslation();

  return (
    <div id="perf" className="page-padding column perf">
      <motion.div
        id="title"
        className="page-title perf-title"
        initial={{ transform: 'translate(0, 50%)', opacity: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        whileInView={{ transform: 'translate(0, 0)', opacity: 1 }}
      >
        {t('title.perf')}
      </motion.div>

      <div id="container" className="row perf-container">
        <img src="./assets/perf/perf1.png" alt="Performance" />
        <video src="./assets/perf/perf2.webm" muted autoPlay loop playsInline />
      </div>

      <h1 className="description perf-description">{t('perf.description')}</h1>
    </div>
  );
}

export default Buy;
