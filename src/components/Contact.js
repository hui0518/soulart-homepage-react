function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();
    const xs = ['name', 'phone', 'email', 'memo', 'company'];

    const ys = xs.map((x) => {
      const a = document.getElementById(x);
      return `${x}:%0A${a.value}%0A%0A`;
    });

    const title = 'Contact to Soulart';
    const body = ys.join('');
    const soulartEmail = 'hui051875@gmail.com';

    const mailLink = `mailto:${soulartEmail}?subject=${title}&body=${body}`;
    window.location.href = mailLink;
  };

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
        <h3 className="font-bold text-lg">Contact & Apply</h3>
        <p className="py-4">If you want to join us, Please contact us.</p>

        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/signature.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder="Name"
            id="name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/email.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder="Email"
            id="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/company.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder="Company"
            id="company"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <img src="/assets/icons/phone.svg"></img>
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            className="grow"
            placeholder="Phone"
            id="phone"
          />
        </label>

        <textarea
          style={{ width: '100%', resize: 'none', height: '200px' }}
          className="textarea textarea-bordered"
          placeholder="Memo"
          id="memo"
        ></textarea>

        <button
          className="btn btn-active btn-primary"
          onClick={sendEmail}
          style={{ marginTop: '20px' }}
        >
          Send Email
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
