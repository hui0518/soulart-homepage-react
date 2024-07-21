import { motion } from 'framer-motion';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  left: 95vw;
  top: 95vh;

  width: 100px;
  height: 40px;

  transform: translate(-90%, -50%);
  z-index: 10;

  #apply {
    width: 100%;
    height: 100%;
    line-height: 40px;
    background-color: rgba(40, 40, 40, 1);
    border-radius: 15px;
    border: 2px solid rgb(50, 50, 50);
    opacity: 0;

    transition-property: opacity;
    transition-duration: 1.5s;
  }
`;

function ContactBubble() {
  return (
    <Div>
      <motion.button
        className="btn"
        onClick={() => document.getElementById('my_modal_2').showModal()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="apply"
      >
        <div>Contact</div>
      </motion.button>
    </Div>
  );
}

export default ContactBubble;
