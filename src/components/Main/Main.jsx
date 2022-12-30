import About from "../About/About";
import Footer from "../Footer/Footer";
import Methods from "../Methods/Methods";
import Products from "../Products/Products";
import Shop from "../Shop/Shop";

function Main() {
  return (
    <section className="main">
      <About />
      <Products />
      <Methods />
      <Shop />
      <Footer />
    </section>
  )
}

export default Main;