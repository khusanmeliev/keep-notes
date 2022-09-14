import React, { useState } from "react";
import { S } from "./styles";
import { IoIosAdd } from "react-icons/io";

const CreateArea = ({ onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleExpanded = () => {
    setIsExpanded(true);
  };

  const submitButton = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <S.Form>
      {isExpanded && (
        <S.Input
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
      )}
      <p>
        <S.TextArea
          value={note.content}
          onClick={handleExpanded}
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
        ></S.TextArea>
      </p>
      <S.Button onClick={submitButton}>
        <IoIosAdd size={35} />
      </S.Button>
    </S.Form>
  );
};

export default CreateArea;
