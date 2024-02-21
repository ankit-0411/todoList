import React, { useEffect, useState } from "react";
import "./paginationStyle.css";
const Paginations = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  console.log(product);

  const apiCAll = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    if (data && data?.products) {
      setProduct(data?.products);
    }
  };

  useEffect(() => {
    apiCAll();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= product?.length / 10) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {product?.length > 0 && (
        <div className="products">
          {product.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod?.id}>
                <img src={prod?.thumbnail} alt={prod?.name} />
                <spn>{prod?.title}</spn>
              </span>
            );
          })}
        </div>
      )}
      {product?.length > 0 && (
        <div className="pagination ">
          <span onClick={() => selectedPageHandler(page - 1)}>◀</span>
          {[...Array(product?.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectedPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span onClick={() => selectedPageHandler(page + 1)}>▶</span>
        </div>
      )}
    </div>
  );
};

export default Paginations;
