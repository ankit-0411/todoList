// const name = {
//   a: "undefined",
//   b: [11, "undefined"],
//   c: [13, ["undefined", "ankit"]],
// };

// function undefinedToNull(obj) {
//   if (obj !== null && typeof obj === "object") {
//     for (let key in obj) {
//       if (typeof obj[key] === "object") {
//         undefinedToNull(obj[key]); // Recursively check nested objects
//       } else if (obj[key] === "undefined") {
//         obj[key] = null; // Replace "undefined" string with null
//       }
//     }
//   }
// }

// undefinedToNull(name);
// console.log(name);

// undefinedToNull(name);

const name = {
  a: "undefined",
  b: [11, "undefined"],
  c: [13, ["undefined", "ankit"]],
};

const nulandUdefined = (obj) => {
  if (obj !== null && typeof obj === "object") {
    for (let key in obj) {
      if (typeof obj[key] == "object") {
        nulandUdefined(obj[key]);
      } else if (obj[key] === "undefined") {
        obj[key] = "null";
      }
    }
  }
};
nulandUdefined(name);
console.log(name);
