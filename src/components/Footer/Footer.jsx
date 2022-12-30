import telegaIcon from '../../images/telega-icon.svg';
import logoImage from '../../images/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__copyright'><span className='footer__copyright-symbol'>&#169;</span> Сила Предков</p>
      <img className='logo' src={logoImage} alt="логотип сила предков" />
      <div className='footer__contacts'>
        <p className='footer__links-title'>Менеджеры:</p>
        <a className='footer__link' href="https://t.me/Zoya_Dmitrieva"><img className='footer__soc-icon' src={telegaIcon} alt="telegram" /> Зоя Дмитриева</a>
        <a className='footer__link' href="https://t.me/KiloLoo"><img className='footer__soc-icon' src={telegaIcon} alt="telegram" /> Илья Дмитриев</a>
      </div>
    </footer>
  )
}

export default Footer;