import React, { useState } from "react";
import { styled } from "styled-components";
import { addTodo } from "../redux/modules/todoSlice";
import { useAppDispatch } from "../hooks";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        title,
        content,
        isDone: false,
      })
    );
    setTitle("");
    setContent("");
  };

  return (
    <TodoInputContainer>
      <InputArea>
        <P>제목</P>
        <Input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <P>내용</P>
        <Input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </InputArea>
      <AddBtn
        onClick={() => {
          handleClick();
        }}
      >
        추가
      </AddBtn>
    </TodoInputContainer>
  );
};

export default TodoInput;

const TodoInputContainer = styled.div`
  width: 100%;
  height: 60px;
  margin: 5px 10px;
  padding: 8px 50px;
  border-radius: 15px;
  background: #afafaf;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "IBM Plex Sans KR", sans-serif;
`;

const InputArea = styled.div`
  display: flex;
  gap: 20px;
`;

const P = styled.p`
  margin-top: 5px;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;
  margin-left: 10px;

  border: 1px #8b8686;
  border-radius: 10px;
  background: #d9d9d9;

  &:focus {
    outline: 2px solid #00109e;
  }
`;

const AddBtn = styled.button`
  width: 100px;
  height: 30px;

  border: none;
  border-radius: 10px;
  background: #0c1881;

  color: white;

  &:hover {
    background: white;
    color: #242e8a;
    cursor: pointer;
    font-weight: bold;
  }
`;
