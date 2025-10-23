import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./HomePage.css";
import ProductGrid from "./ProductGrid";

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products/").then((response) => {
      setProducts(response.data);
    });
  }, []);

  //Server-Proxy configs

  return (
    <>
      <title>E-Commerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;
