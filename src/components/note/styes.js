import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    background: #ffffff;
    width: 240px;
    border-radius: 7px;
    box-shadow: 0 2px 5px rgb(175, 175, 175);
    padding: 10px;
    margin: 16px;
    float: left;
    margin-right: 0;
  `,

  Heading: styled.h1`
    font-size: 16px;
    margin-bottom: 6px;
  `,

  Text: styled.p`
    font-size: 16px;
    color: #6f212b;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
  `,

  Button: styled.button`
    position: relative;
    float: right;
    color: #f88651;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  `,
};
