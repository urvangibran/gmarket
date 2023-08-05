import Offerings from "../../components/Offerings";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Footer from "../../components/Footer/FooterComponent/index.jsx";
import Barrier from "../../components/Footer/Barrier";

const home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Offerings />
      <Products />
      <Barrier />
      <Footer/>
    </main>
  );
};

export default home;
