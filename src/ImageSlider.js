import React, { useEffect, useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUs7wFvI-COH94wGvmM4O0_aChPGegaq2cVA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS33OBsksxxtKPMot5VMrmR-tibYmrJD1LrA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhIxagGjmgjHws5v5zUCiao_kvytlIHlOaA&usqp=CAU",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHandler = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousHandler = () => {
    setCurrentIndex((prev) => (prev ? prev - 1 : images.length - 1));
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={previousHandler}>Previous</button>
        {/* <img
          style={{ minWidth: "400px", minHeight: "300px" }}
          src={images[currentIndex]}
          alt={images[currentIndex]}
        /> */}
        {images.map((item, index) => (
          <img
            src={item}
            key={index}
            alt={item}
            style={{
              display: index === currentIndex ? " block" : "none ",
              minWidth: "400px",
              minHeight: "300px",
            }}
          />
        ))}
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
