import { useEffect, useState } from "react";
import Products from "./components/Product";
import Filter from "./components/Filter";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function handleChange(event) {
    setFilter((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  let filtered = [...products];
  function filterData() {
    if (filter.minPrice) {
      filtered = filtered.filter((item) => item.price >= Number(filter.minPrice));
    }

    if (filter.maxPrice) {
      filtered = filtered.filter((item) => item.price <= Number(filter.maxPrice));
    }

    if (filter.category) {
      if (filter.category != "all") {
        filtered = filtered.filter((item) => item.category === filter.category);
      }
    }

    if (filter.rate) {
      filtered = filtered.filter((item) => item.rating.rate >= Number(filter.rate));
    }
  }

  filterData()

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <Filter handleChange={handleChange} products={products} />
      <div className="flex flex-col flex-wrap justify-center md:flex-row gap-4">
        {filtered.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
