// App.jsx
import React, { useState } from 'react';
import useFilterUsers from './components/useFilterUsers';

export default function App() {
  const [users, setUsers] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [search, setSearch] = useState("");

  const filteredUser = useFilterUsers(users, search);

  const handleClick = () => {
    if (nameInput.trim() !== "") {
      setUsers([...users, nameInput.trim()]);
      setNameInput("");
    }
  };

  return (
    <div>
      <h2> Қолданушылар тізімі</h2>
      <div>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Атыңды жаз..."
        />
        <button onClick={handleClick}>Қосу</button>
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Іздеу..."
        />
      </div>
      <ul>
        {filteredUser.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

