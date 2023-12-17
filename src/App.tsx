import { styled } from "styled-components";
import Layout from "./shared/Layout";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Layout>
      <H1>My Todo List</H1>
      <TodoInput />
      <TodoList />
    </Layout>
  );
};

export default App;

const H1 = styled.h1`
  width: 100%;
  margin-top: 20px;

  padding: 10px 20px;
  border-radius: 15px;
  background-color: #242e8a;
  font-family: "Permanent Marker", cursive;
  color: white;
  font-size: 20px;
`;
