function Footer() {
  return (
    <footer
      className="footer footer-center text-primary-content p-10"
      style={{ backgroundColor: 'rgb(25, 25, 25)' }}
    >
      <aside>
        <img src="/assets/logo.png" width="150px" />
        <p className="font-bold">Soulart Startup Company since 2024</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <p>대표: 오혁재</p>
        <p>사업자 번호: 12345678-0987</p>
        <p>주소: 대전 유성구 대학로 291</p>
        <p>Tel: 010-1234-5678</p>
        <p>Mail: yuigahama@yui.com</p>
      </aside>
    </footer>
  );
}

export default Footer;
