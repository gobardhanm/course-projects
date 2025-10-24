import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./HomePage.css";
import ProductGrid from "./ProductGrid";

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products/");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  //Server-Proxy configs

  return (
    <>
      <title>E-Commerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
