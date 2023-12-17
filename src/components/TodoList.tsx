import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks";

const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todoReducer);

  return (
    <TodoListContainer>
      <Div>
        <H2>working.. 🔥</H2>
        <Lists>
          {todos
            ?.filter((todo) => !todo.isDone)
            .map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
        </Lists>
      </Div>
      <Div>
        <H2>Done..🎉</H2>
        <Lists>
          {todos
            ?.filter((todo) => todo.isDone)
            .map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
        </Lists>
      </Div>
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  margin: 15px 20px;
  font-family: "IBM Plex Sans KR", sans-serif;
`;

const H2 = styled.h2`
  font-family: "Permanent Marker", cursive;
  font-size: 30px;
  margin-bottom: 20px;
`;

const Div = styled.div`
  margin-bottom: 80px;
`;

const Lists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  row-gap: 20px;
`;
