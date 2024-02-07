// import React, { useState, useEffect } from "react";
// import "./style.css";

// const APIURL = "https://jsonplaceholder.typicode.com/users";

// function App() {
//   const [userData, setUserData] = useState([]);
//   const [sortOrder, setSortOrder] = useState(0);

//   const apicall = async () => {
//     const response = await fetch(APIURL);
//     const data = await response.json();
//     setUserData(data);
//   };

//   // useEffect(() => {
//   //   // Load data when component mounts
//   //   apicall();
//   // }, []);

//   const getUsers = () => {
//     apicall();
//   };

//   const sortList = () => {
//     // Sorting logic based on sortOrder
//     const sortedData = [...userData];

//     if (sortOrder === 0) {
//       sortedData.sort((a, b) => a.company.name.length - b.company.name.length);
//     } else if (sortOrder === 1) {
//       sortedData.sort((a, b) => b.company.name.length - a.company.name.length);
//     }

//     setUserData(sortedData);
//     setSortOrder((sortOrder + 1) % 2);
//   };

//   return (
//     <main>
//       <h1>User List</h1>

//       <div>
//         <button onClick={getUsers}>Get Users</button>
//         <button onClick={sortList}>Sort list by name's length</button>
//       </div>

//       <ul>
//         {userData.map((el, index) => (
//           <li key={index}>{el.company.name}</li>
//         ))}
//       </ul>
//     </main>
//   );
// }

// export default App;

//? api call and fecth data than filter data
// import React, { useState, useEffect } from "react";

// const ApiData = () => {
//   const [data, setData] = useState([]);
//   const [searchId, setSearchId] = useState("");

//   useEffect(() => {
//     // Fetch data from your API
//     fetch("https://api.example.com/data")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const filteredData = data.filter((item) =>
//     item.id.toString().includes(searchId.toString())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by ID"
//         value={searchId}
//         onChange={(e) => setSearchId(e.target.value)}
//       />

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Company Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.companyName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ApiData;
//import { useState } from "react";
// import "./styles.css";

export default function App() {
  const expenses = [
    { id: "1", name: "Want to do something" },
    { id: "2", name: "Going to school" },
    { id: "3", name: "Going to work" },
  ];
  const [allExpenses, setAllExpenses] = useState(expenses);
  const [newExpense, setNewExpense] = useState("");
  const [editExpenseId, setEditExpenseId] = useState(null);

  // console logs
  const addExpenseHandler = () => {
    const newExpenseItem = {
      id: (allExpenses.length + 1).toString(),
      name: newExpense,
    };
    const updatedExpenses = [...allExpenses, newExpenseItem];
    setAllExpenses(updatedExpenses);
    setNewExpense(""); // Reset the input field after adding an expense
  };

  // delete element
  const deleteHandler = (id) => {
    const filteredExpenses = allExpenses.filter((expense) => expense.id !== id);
    setAllExpenses(filteredExpenses);
  };

  // Edit List
  const editHandler = (id) => {
    const editedExpense = allExpenses.find((expense) => expense.id === id);
    setEditExpenseId(id);
    setNewExpense(editedExpense.name);
  };

  // Save Edited Value
  const saveHandler = () => {
    const updatedExpenses = allExpenses.map((expense) =>
      expense.id === editExpenseId ? { ...expense, name: newExpense } : expense
    );
    setAllExpenses(updatedExpenses);
    setEditExpenseId(null);
    setNewExpense("");
  };

  return (
    <>
      <div className="App">
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
              color: "red",
              padding: "10px",
              margin: "10px",
              width: "300px",
            }}
            value={newExpense}
            onChange={(e) => setNewExpense(e.target.value)}
          />
          {editExpenseId ? (
            <button
              style={{ padding: "10px", margin: "10px", fontWeight: "bold" }}
              onClick={saveHandler}
            >
              Save
            </button>
          ) : (
            <button
              style={{ padding: "10px", margin: "10px", fontWeight: "bold" }}
              onClick={addExpenseHandler}
            >
              Add Expenses
            </button>
          )}
        </div>
      </div>
      {allExpenses?.length > 0 ? (
        allExpenses.map((expense) => {
          return (
            <div key={expense.id}>
              <ul style={{ display: "flex" }}>
                <li
                  style={{
                    padding: "5px",
                    margin: "5px",
                    fontWeight: "bold",
                    listStyle: "none",
                  }}
                >
                  {expense.name}
                </li>
                <button onClick={() => editHandler(expense.id)}>Edit</button>
                <button onClick={() => deleteHandler(expense.id)}>
                  Delete
                </button>
              </ul>
            </div>
          );
        })
      ) : (
        <div> TASK LIST IS EMPTY</div>
      )}
    </>
  );
}
