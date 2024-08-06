import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import settings from '../settings';
import './Members.scss';

function Member({ name, image }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="card member">
      <img className="member-image" src={image} alt={name} />
      <div className="card-body">
        <h2 className="card-title member-name">{name}</h2>
      </div>
    </motion.div>
  );
}

function Members() {
  const { t } = useTranslation();
  return (
    <div id="members" className="page-padding members">
      <motion.div
        className="page-title members-title"
        initial={{ transform: 'translate(0, 50%)', opacity: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        whileInView={{ transform: 'translate(0, 0)', opacity: 1 }}
      >
        {t('title.members')}
      </motion.div>
      <div className="members-container">
        {settings.members.map(({ name, image }) => (
          <Member name={t(`members.${name}`)} image={image} key={name} />
        ))}
      </div>
    </div>
  );
}

export default Members;
