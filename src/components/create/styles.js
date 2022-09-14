import styled from "styled-components";

export const S = {
  Form: styled.form`
    position: relative;
    width: 600px;
    margin: 32px auto 50px auto;
    background: #fff;
    padding: 7px;
    border-radius: 7px;
    box-shadow: 0 1px 7px rgb(128, 128, 128);
  `,

  Input: styled.input`
    width: 95%;
    border: none;
    padding: 5px 10px;
    margin-bottom: 20px;
    outline: none;
    font-size: 16px;
    resize: none;
  `,

  TextArea: styled.textarea`
    width: 95%;
    border: none;
    padding: 4px 10px;
    outline: none;
    font-size: 16px;
    resize: none;
  `,

  Button: styled.button`
    position: absolute;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255, 200, 18);
    color: #fff;
    border: none;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgb(165, 165, 165);
    cursor: pointer;
    outline: none;
  `,
};
