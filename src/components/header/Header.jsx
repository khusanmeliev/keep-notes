import React from "react";
import { S } from "./styles";

function Header() {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  return (
    <S.HeaderWrapper>
      {logo}
      <h1>Keep</h1>
    </S.HeaderWrapper>
  );
}

export default Header;
