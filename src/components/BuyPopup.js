import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Dialog = styled.dialog`
  .popup {
    &-textarea {
      width: 100%;
      height: 200px;
      resize: none;
    }

    &-button {
      border-radius: 10px;
      margin-top: 20px;
    }
  }
  .modal {
    &-textarea {
      width: 100%;
      height: 200px;
      resize: none;
    }

    &-button {
      border-radius: 10px;
      margin-top: 20px;
    }

    &-box {
      height: 600px;
      background-color: rgb(20, 20, 20);
      border-radius: 20px;
    }
  }
`;

function BuyPopup() {
  const sendEmail = (event) => {
    event.preventDefault();

    const keys = ['name', 'phone', 'email', 'memo', 'company'];
    const body = keys
      .map((x) => {
        const value = document.getElementById(x).value;
        return `${x}:%0A${value}%0A%0A`;
      })
      .join('');

    const title = 'Contact with Soulart';
    const soulartEmail = 'hui051875@gmail.com';
    const mailLink = `mailto:${soulartEmail}?subject=${title}&body=${body}`;

    window.location.href = mailLink;
  };

  const [t] = useTranslation();

  const inputs = [
    {
      id: 'name',
      placeholder: 'name',
      icon: './assets/icons/signature.svg',
    },
    {
      id: 'company',
      placeholder: 'company',
      icon: './assets/icons/company.svg',
    },
    {
      id: 'email',
      placeholder: 'email',
      icon: './assets/icons/email.svg',
    },
    {
      id: 'phone',
      placeholder: 'phone',
      icon: './assets/icons/phone.svg',
    },
  ];

  return (
    <Dialog id="buy-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{t('buy.popup.title')}</h3>
        <p className="py-4">{t('buy.popup.description')}.</p>

        {inputs.map(({ id, placeholder, icon }) => (
          <label
            key={id}
            className="input input-bordered flex items-center gap-2"
          >
            <img src={icon} />
            <input
              id={id}
              className="grow"
              type="text"
              placeholder={t(`contact.${placeholder}`)}
            />
          </label>
        ))}

        <textarea
          id="memo"
          className="modal-textarea textarea textarea-bordered"
          placeholder={t('contact.memo')}
        />

        <motion.button
          id="submit-button"
          className="modal-button btn btn-active btn-primary"
          onClick={sendEmail}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {t('buy.popup.button')}
        </motion.button>

        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: '100%',
              }}
            >
              ✕
            </motion.div>
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </Dialog>
  );
}

export default BuyPopup;
