import React from "react";
import { S } from "./styes";
import { MdDelete } from "react-icons/md";

const Note = ({ title, content, onDelete, id }) => {
  const deleteBtn = () => {
    onDelete(id);
  };

  return (
    <S.Wrapper>
      <S.Heading>{title}</S.Heading>
      <S.Text>{content}</S.Text>
      <S.Button onClick={deleteBtn}>
        <MdDelete size={25} />
      </S.Button>
    </S.Wrapper>
  );
};

export default Note;
