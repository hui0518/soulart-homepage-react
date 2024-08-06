import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import settings from '../settings.json';
import './Partners.scss';

function Partner({ name, image }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="card w-96 partner">
      <img className="partner-image" src={image} alt={name} />
      <div className="card-body">
        <h2 className="card-title partner-name">{name}</h2>
      </div>
    </motion.div>
  );
}

function Partners() {
  const { t } = useTranslation();
  return (
    <div id="partners" className="partners">
      <motion.div
        id="title"
        className="partners-title"
        initial={{ transform: 'translate(0, 50%)', opacity: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        whileInView={{ transform: 'translate(0, 0)', opacity: 1 }}
      >
        {t('title.partners')}
      </motion.div>
      <div id="partners-container" className="partners-container">
        {settings.partners.map(({ name, image }) => (
          <Partner name={t(`partners.${name}`)} image={image} key={name} />
        ))}
      </div>
    </div>
  );
}

export default Partners;
