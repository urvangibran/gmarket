import Offerings from "../../components/Offerings";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";

const home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Offerings />
      <Products />
    </main>
  );
};

export default home;
