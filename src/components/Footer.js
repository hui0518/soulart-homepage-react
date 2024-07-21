import { useTranslation } from 'react-i18next';

function Footer() {
  const [t] = useTranslation();

  return (
    <footer
      className="footer footer-center text-primary-content p-10"
      style={{ backgroundColor: 'rgb(25, 25, 25)' }}
    >
      <aside>
        <img src="/assets/logo.png" width="150px" />
        <p className="font-bold">Soulart Startup Company since 2024</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <p>{t('footer.representative')}</p>
        <p>{t('footer.address')}</p>
        <p>{t('footer.phone')}</p>
        <p>{t('footer.email')}</p>
      </aside>
    </footer>
  );
}

export default Footer;
