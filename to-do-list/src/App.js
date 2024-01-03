import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';

let items = [
  { key: getUuid(), description: 'Complete homework', isComplete: false },
  { key: getUuid(), description: 'Buy groceries', isComplete: false },
  { key: getUuid(), description: 'Call John', isComplete: false },
  { key: getUuid(), description: 'Blah blah blah Blah blah blah', isComplete: false }
  // Add more ToDoItems here
];

function App() {
  const [toDoItems, setToDoItems] = React.useState(items);

  const addItem = (description) => {
    const nextItems = [
      ...toDoItems,
      {
        key: getUuid(),
        description: description,
        isComplete: false
      }
    ]

    setToDoItems(nextItems);
  };

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