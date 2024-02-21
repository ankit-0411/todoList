import React, { useEffect, useState } from "react";

const API_Call = "https://jsonplaceholder.typicode.com/users";

const SearchableList = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState(null);
  const [filteredata, setFilteredData] = useState([]);
  const [order, setOrder] = useState(0);

  //console input data

  useEffect(() => {
    const response = fetch(API_Call)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  const inputHandler = (e) => {
    const searchBarText = e.target.value;
    setInputData(searchBarText);
    if (searchBarText === "") {
      setFilteredData(data);
    }
  };

  const searchHandler = () => {
    const seachAbleData = filteredata.filter((item) =>
      item.name.toLowerCase().includes(inputData.toLowerCase())
    );
    setFilteredData(seachAbleData);
  };

  const sortHandler = () => {
    const sortedData = [...data]; // Rename sorteddata to sortedData for consistency and readability

    if (order === 0) {
      sortedData.sort((a, b) => a.name.localeCompare(b.name)); // Use localeCompare() for string comparison
    } else if (order === 1) {
      sortedData.sort((a, b) => b.name.localeCompare(a.name)); // Reverse order for descending sorting
    }
    setFilteredData(sortedData);
    setOrder((order + 1) % 2);
    console.log("SortedData -->", sortedData); // Correct typo in console.log
  };

  return (
    <>
      <div>
        <h1> Search the name of a user </h1>
        <input type="text" onChange={inputHandler} />
        <button onClick={searchHandler}>Search</button>
        <button onClick={sortHandler}>sort</button>
      </div>
      <div>
        {filteredata.map((item) => {
          return (
            <>
              <ul>
                <li key={item.id}>{item.name}</li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SearchableList;
