import React from "react";
import { S } from "./styles";

function Count({ count }) {
  return (
    <S.Wrapper>
      <h4>{count}</h4>
    </S.Wrapper>
  );
}

export default Count;
