"use client";

import { useState } from "react";

const DEF_ITEMS = [
  { id: 1, name: "🏆 study" },
  { id: 2, name: "🕹️ play" },
  { id: 3, name: "💻 coding" },
];

export default function Home() {
  let [items, setItems] = useState([]);

  function addItem() {}
  function deleteItem() {}

  return (
    <main className="p-4">
      <h1>Todo List</h1>
      <div>
        {items.map((v) => (
          <div key={v.id}>item here</div>
        ))}
      </div>
    </main>
  );
}
