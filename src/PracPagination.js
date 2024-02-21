import React, { useEffect, useState } from "react";

const PracPagination = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  console.log("product:", product);

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
  const SelectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= product.length / 10) {
      setPage(selectedPage);
    }
  };
  return (
    <>
      <div>
        {product?.length > 0 && (
          <div
            style={{
              display: "grid",
              gap: "20",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            {product.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <div key={prod.id}>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    style={{ width: "220px", height: "300px" }}
                  />
                  <h2>{prod.title}</h2>
                </div>
              );
            })}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => SelectPageHandler(page - 1)}
          >
            Prev ◀
          </span>
          {product.length > 0 &&
            [...Array(product?.length / 10)].map((_, i) => (
              <div key={i}>
                <div
                  style={{
                    margin: "10px",
                    padding: "10px",
                    cursor: "pointer",
                    border: "1px solid black",
                    backgroundColor: page === i + 1 ? "gray" : "",
                  }}
                  onClick={(e) => SelectPageHandler(i + 1)}
                >
                  {i + 1}
                </div>
              </div>
            ))}
          <span
            style={{
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => SelectPageHandler(page + 1)}
          >
            Next ▶
          </span>
        </div>
      </div>
    </>
  );
};

export default PracPagination;
