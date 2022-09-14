import React, { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Count from "./components/count/Count";
import CreateArea from "./components/create/CreateArea";
import Note from "./components/note/Note";

const App = (props) => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  const deleteNotes = (id) => {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  };

  useEffect(() => {}, [notes]);

  return (
    <>
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </>
  );
};

export default App;
