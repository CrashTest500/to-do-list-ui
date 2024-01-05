import React, { useEffect } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';

function App() {
  const [toDoItems, setToDoItems] = React.useState([]);

  const addItem = (newItem) => {
    const nextItems = [
      ...toDoItems,
      newItem
    ]

    setToDoItems(nextItems);
  };

  const fetchToDoList = async () => {
    try {
      await fetch("https://crashtest-to-do.azurewebsites.net/todo")
        .then(data => data.json())
        .then(data => {
          setToDoItems(data);
        });
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToDoList();
  }, []);

  const updateItems = (item) => {
    const nextItems = toDoItems.map((toDoItem) => {
      if (toDoItem.key === item.key) {
        return item;
      }

      return toDoItem;
    });

    setToDoItems(nextItems);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
      </header>

      <main className="content-container">
        <AddItem onAddItem={addItem} />
        
        <h2>ToDo:</h2>
        <ToDoList toDoItems={toDoItems.filter(i => !i.isComplete)}
          onUpdateItem={updateItems} />

        <h2>Completed:</h2>
        <ToDoList toDoItems={toDoItems.filter(i => !!i.isComplete)}
          onUpdateItem={updateItems} />
      </main>
    </div>
  )
}

export function getUuid() {
  const { v4: uuidv4 } = require('uuid');
  const guid = uuidv4();

  return guid;
}

export default App;