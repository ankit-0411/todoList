import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  // console.log("User data--->>", user);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    const apiCall = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const selectHandler = (event) => {};
  return (
    <div className="App">
      <select onChange={(e) => setSelectedUserId(e.target.value)}>
        <option value="" disable>
          Select The Value
        </option>
        {user.map((item) => (
          <option value={item?.name} key={item.id}>
            {item?.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default App;
