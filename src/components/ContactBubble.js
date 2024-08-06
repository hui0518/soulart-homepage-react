import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactBubble.scss';

function ContactBubble() {
  const { t } = useTranslation();

  useEffect(() => {
    const contactBubble = document.getElementById('apply');
    if (window.scrollY > 10) {
      contactBubble.style.opacity = 1;
    }

    window.addEventListener('scroll', () => {
      contactBubble.style.opacity = window.scrollY > 10 ? 1 : 0;
    });
  }, []);

  return (
    <motion.button
      id="apply"
      className="btn"
      onClick={() => document.getElementById('contact-modal').showModal()}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div>{t('contact.bubble')}</div>
    </motion.button>
  );
}

export default ContactBubble;
