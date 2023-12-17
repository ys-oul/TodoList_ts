import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoSlice";
import Swal from "sweetalert2";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
  const deletAlert = () => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#48088A",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteTodo(id));

        Swal.fire("Deleted", "삭제 완료", "success");
      }
    });
  };
  const { todo } = props;
  const { id, title, content, isDone } = todo;

  const dispatch = useDispatch();

  const deleteTodoItem = (id: number) => {
    deletAlert();
    // dispatch(deleteTodo(id));
  };

  const updateTodoItem = (id: number) => {
    dispatch(updateTodo(id));
  };

  return (
    <TodoItemContainer>
      <ContentBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ContentBox>
      <Btns>
        <Btn
          onClick={() => {
            updateTodoItem(id);
          }}
        >
          {isDone ? "취소" : "완료"}
        </Btn>
        <Btn
          onClick={() => {
            deleteTodoItem(id);
          }}
        >
          삭제
        </Btn>
      </Btns>
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.div`
  width: 255px;
  height: 200px;

  margin-right: 20px;
  padding: 5px 15px;

  border-radius: 20px;
  border: 2px solid #242e8a;
  background-color: #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ContentBox = styled.div`
  padding: 5px;
`;

const Title = styled.h3`
  margin: 10px 5px;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.p`
  width: 255px;
  height: 80px;
  margin: 10px 0;
`;

const Btns = styled.div`
  text-align: center;
`;

const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #afafaf;
  background: #fff;

  &:hover {
    background-color: #242e8a;
    color: white;
    cursor: pointer;
  }
`;
