import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Dialog = styled.dialog`
  .modal-box {
    height: 600px;
    background-color: rgb(20, 20, 20);
    border-radius: 20px;
  }

  input {
    margin-left: 10px;
  }

  textarea {
    width: 100%;
    height: 200px;
    resize: none;
  }

  #submitButton {
    border-radius: 10px;
    margin-top: 20px;
  }
`;

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();

    const keys = ['name', 'phone', 'email', 'memo', 'company'];
    const body = keys
      .map((x) => {
        const value = document.getElementById(x).value;
        return `${x}:%0A${value}%0A%0A`;
      })
      .join('');

    const title = 'Contact to Soulart';
    const soulartEmail = 'hui051875@gmail.com';
    const mailLink = `mailto:${soulartEmail}?subject=${title}&body=${body}`;

    window.location.href = mailLink;
  };

  const [t] = useTranslation();

  return (
    <Dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{t('contact.title')}</h3>
        <p className="py-4">{t('contact.description')}.</p>

        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/signature.svg"></img>
          <input
            type="text"
            className="grow"
            placeholder={t('contact.name')}
            id="name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/email.svg"></img>
          <input
            type="text"
            className="grow"
            placeholder={t('contact.email')}
            id="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/company.svg"></img>
          <input
            type="text"
            className="grow"
            placeholder={t('contact.company')}
            id="company"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/phone.svg"></img>
          <input
            type="text"
            className="grow"
            placeholder={t('contact.phone')}
            id="phone"
          />
        </label>

        <textarea
          className="textarea textarea-bordered"
          placeholder={t('contact.memo')}
          id="memo"
        ></textarea>

        <button
          id="submitButton"
          className="btn btn-active btn-primary"
          onClick={sendEmail}
        >
          {t('contact.button')}
        </button>

        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </Dialog>
  );
}

export default Contact;
