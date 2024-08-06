import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Div = styled(motion.button)`
  position: fixed;
  right: 10px;
  bottom: 10px;

  width: 100px;
  height: 40px;
  line-height: 40px;

  border: 2px solid rgb(50, 50, 50);
  border-radius: 15px;
  background-color: rgb(40, 40, 40);

  z-index: 10;
  opacity: 0;
  transition: opacity 1s ease-in-out;
`;

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
    <Div
      id="apply"
      className="btn"
      onClick={() => document.getElementById('contact-modal').showModal()}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div>{t('contact.bubble')}</div>
    </Div>
  );
}

export default ContactBubble;
