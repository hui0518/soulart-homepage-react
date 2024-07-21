import { useTranslation } from 'react-i18next';

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
    <dialog id="my_modal_2" className="modal">
      <div
        className="modal-box"
        style={{
          backgroundColor: 'rgb(20, 20, 20)',
          borderRadius: '20px',
          height: '600px',
        }}
      >
        <h3 className="font-bold text-lg">{t('contact.title')}</h3>
        <p className="py-4">{t('contact.description')}.</p>

        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/signature.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder={t('contact.name')}
            id="name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/email.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder={t('contact.email')}
            id="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/company.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder={t('contact.company')}
            id="company"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/phone.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder={t('contact.phone')}
            id="phone"
          />
        </label>

        <textarea
          style={{ width: '100%', resize: 'none', height: '200px' }}
          className="textarea textarea-bordered"
          placeholder={t('contact.memo')}
          id="memo"
        ></textarea>

        <button
          className="btn btn-active btn-primary"
          onClick={sendEmail}
          style={{ marginTop: '20px' }}
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
    </dialog>
  );
}

export default Contact;
