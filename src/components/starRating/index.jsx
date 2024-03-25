import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  // A Function To handle The clicking on the Stars we
  const handleRatingClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  //   A Function When we hover or enter the mouse on the Stars
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  // A Function when we leave the hover and store the index where we leave in a variable
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.5rem",
        paddingTop: "100px",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#414141",
      }}
    >
      {/* We Take the no Of Stars Which we received and store it in an Array  */}
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        {
          /* Here we return An ReactIcon on the index of array  */
        }
        {
          /* we pass onClick so we can select the stars 2 3 4 any number we want  */
        }
        // We pass onMouseEnter={} to hover the stars and want to select them as a rating
        // We pass onMouseLeave={} to store the number of index we hover on for selection in a state
        return (
          <FaStar
            key={index}
            onClick={() => handleRatingClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={index <= (hover || rating) ? "active" : "inactive"}
          />
        );
      })}
    </div>
  );
}

// let stars = [1, 2, 3, 4, 5, 6];

// export default function StarRating() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const handleRatingClick = (getCurrentIndex) => setRating(getCurrentIndex);
//   const handleMouseEnter = (getCurrentIndex) => setHover(getCurrentIndex);
//   const handleMouseLeave = () => setHover(rating);
//   return (
//     <div>
//     star =+ 1
//       {stars.map((_, index) => {
//         return (
//           <FaStar
//             className={index <= (hover || rating) ? "active" : "inactive"}
//             key={index}
//             onClick={() => handleRatingClick(index)}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           />
//         );
//       })}
//     </div>
//   );
// }
