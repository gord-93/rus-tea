import logoImage from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className='logo' src={logoImage} alt="Логотип Сила Предков" />
      <div className='header__links'>
        <a href='#about' className='header__link'>О нас</a>
        <a href='#products' className='header__link'>Наша продукция</a>
        <a href='#methods' className='header__link'>Способы приготовления</a>
        <a href='#shop' className='header__link'>Где купить</a>
        <a href='*' className='header__link'>Контакты</a>
      </div>
      <div className='header__burger'>

      </div>
    </header>
  );
}

export default Header;