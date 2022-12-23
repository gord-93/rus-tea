import ivanTeaShop from '../../images/ivan-tea-shop-image.jpeg';
import saganTeaShop from '../../images/sagan-dailia-shop-image.jpeg';
import saganTeaBigShop from '../../images/sagan-dailia-50-shop-image.jpeg'
import kurilTea from '../../images/kuril-tea-shop.jpeg';
import backImg from '../../images/tea-sbor-images.svg';

function Products() {
  return (
    <div className="products">
      <p className="block-title block-title_colored_white">Наша продукция</p>
      <div className="products__container">
        <div className="product">
          <img className="product__image" src={ivanTeaShop} alt="Иван-чай" />
          <p className="product__title">Иван-чай</p>
          <p className="product__price">420&#8381; / 150г.</p>
        </div>
        <div className="product">
          <img className="product__image" src={saganTeaShop} alt="Саган-дайля 30 грамм" />
          <p className="product__title">Саган-дайля</p>
          <p className="product__price">290&#8381; / 30г.</p>
        </div>
        <div className="product">
          <img className="product__image" src={saganTeaBigShop} alt="Саган-дайля 50 грамм" />
          <p className="product__title">Саган-дайля</p>
          <p className="product__price">440&#8381; / 50г.</p>
        </div>
        <div className="product">
          <img className="product__image" src={kurilTea} alt="Курильский чай" />
          <p className="product__title">Курильский чай</p>
          <p className="product__price">80&#8381; / 30г.</p>
        </div>
      </div>
      <img className='products__back-image' src={backImg} alt="Сбор чая" />
    </div>
  )
}

export default Products;