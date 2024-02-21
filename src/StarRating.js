// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";

// const StarRating = () => {
//   const [rating, setRating] = useState(null);

//   console.log(rating);

//   return (
//     <>
//       {[...Array(5)].map((star, index) => {
//         const currentRating = index + 1;
//         return (
//           <label key={index}>
//             <input
//               type="radio"
//               name="rating"
//               onChange={() => setRating(currentRating)}
//               style={{
//                 margin: "0",
//                 width: "0",
//                 height: "20px",
//                 visibility: "hidden",
//               }}
//             />
//             <FaStar color={rating >= currentRating ? "yellow" : "gray"} />
//           </label>
//         );
//       })}
//       {rating && (
//         <>
//           {rating <= 2 && <div>Good</div>}
//           {rating === 3 && <div>better</div>}
//           {rating > 3 && <div>best</div>}
//         </>
//       )}
//     </>
//   );
// };

// export default StarRating;
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <>
      {[...Array(5)].map((_, i) => {
        const currentRating = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              onChange={() => setRating(currentRating)}
              style={{ padding: "0", margin: "0", display: "none" }}
            />
            <FaStar color={rating >= currentRating ? "blue" : "grey"} />
          </label>
        );
      })}
    </>
  );
};

export default StarRating;
