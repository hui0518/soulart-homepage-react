import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Foot = styled.footer`
  background-color: rgb(25, 25, 25);

  img {
    width: 150px;
  }
`;

function Footer() {
  const [t] = useTranslation();

  return (
    <Foot className="footer footer-center text-primary-content p-10">
      <aside>
        <img src="./assets/logo.png" />
        <p className="font-bold">Soulart Startup Company since 2024</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <p>{t('footer.representative')}</p>
        <p>{t('footer.address')}</p>
        <p>{t('footer.phone')}</p>
        <p>{t('footer.email')}</p>
      </aside>
    </Foot>
  );
}

export default Footer;
