import React, { useState } from "react";
import EntriesSection from "../components/EntriesSection/EntriesSection.jsx";
import Form from "../components/Form/Form.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Main from "../components/Main/Main.jsx";
import { uid } from "uid";
import "./index.css";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

export default function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  const favoriteEntries = entries.filter((entry) => entry.isFavorite);
  return (
    <>
      <Header />
      <Main />
      <Form onAddEntry={handleAddEntry} />
      <EntriesSection
        entries={filter === "favorites" ? favoriteEntries : entries}
        setEntries={setEntries}
        onShowAllEntries={handleShowAllEntries}
        onShowFavoriteEntries={handleShowFavoriteEntries}
        filter={filter}
        allEntriesCount={entries.length}
        favoriteEntriesCount={favoriteEntries.length}
      />
      <Main />
      <Footer />
    </>
  );
}
