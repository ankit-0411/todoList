import React, { useEffect, useState } from "react";
import "./App.css";

const TodoApp = () => {
  const expenses = [];
  const [allExpenses, setAllExpenses] = useState(expenses);
  const [newExpense, setNewExpense] = useState("");
  const [editExpenseId, setEditExpenseId] = useState(null);

  const addExpenseHandler = () => {
    if (newExpense?.length > 0) {
      const newExpenseItem = {
        id: (allExpenses.length + 1).toString(),
        name: newExpense,
      };

      const totalTask = [...allExpenses, newExpenseItem];

      setAllExpenses(totalTask);
      setNewExpense("");
    }
  };

  const deleteHandler = (id) => {
    const filteredExpenses = allExpenses.filter((task) => task.id !== id);
    setAllExpenses(filteredExpenses);
  };

  const editHandler = (id) => {
    const editedExpense = allExpenses.find((expense) => expense.id === id);
    setEditExpenseId(id);
    setNewExpense(editedExpense.name);
  };

  const saveHandler = () => {
    console.log("saving data");
    const savedData = allExpenses.map((expense) =>
      expense.id === editExpenseId ? { ...expense, name: newExpense } : expense
    );
    setAllExpenses(savedData);
    setNewExpense("");
    setEditExpenseId("");
  };
  //!local Storage
  useEffect(() => {
    const storedTasks = localStorage.getItem("expenses");
    console.log("stored Task -->>", storedTasks);
    if (storedTasks !== null) {
      setAllExpenses(JSON.parse(storedTasks));
    }
  }, []);
  //!local Storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(allExpenses));
  }, [allExpenses]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (editExpenseId) {
        saveHandler();
      } else {
        addExpenseHandler();
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="headLine"> TO DO LIST</h2>
        <div className="input-button-container">
          <input
            type="text"
            value={newExpense}
            onChange={(e) => setNewExpense(e.target.value)}
            className="inputType"
            placeholder="Add Task In Task  List..."
            onKeyPress={handleKeyPress}
          />
          {editExpenseId ? (
            <button className="save-button" onClick={saveHandler}>
              Save
            </button>
          ) : (
            <button className="add-expense-button" onClick={addExpenseHandler}>
              Add
            </button>
          )}
        </div>

        <div>
          {allExpenses.length > 0 ? (
            allExpenses.map((expense) => (
              <div key={expense.id}>
                <ul>
                  <li>
                    <span>{expense.name}</span>
                    <div className="edit-delete-buttons">
                      <button
                        className="edit-button"
                        onClick={() => editHandler(expense.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => deleteHandler(expense.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div className="empty-list-message">TASK LIST IS EMPTY</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
