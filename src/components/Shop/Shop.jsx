import telegaIcon from '../../images/telega-icon.svg';
import vkIcon from '../../images/vk-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';
import backImage from '../../images/present-image.svg';

function Shop() {
  return (
    <div className="shop">
      <a className='anchor' href="*" name="shop">
        <p className="block-title block-title_colored_white">Заказы</p>
      </a>
      <div className="shop__container">
        <a className="shop__link" href="https://t.me/predkovSila"><img className='shop__icon' src={telegaIcon} alt="Telegram" /></a>
        <a className="shop__link" href="https://vk.com/predkovsila"><img className='shop__icon' src={vkIcon} alt="VK" /></a>
        <a className="shop__link" href="*"><img className='shop__icon' src={phoneIcon} alt="Phone" /></a>
      </div>
      <img className='shop__back-image' src={backImage} alt="Подарочная упаковка" />
    </div>
  )
}

export default Shop;