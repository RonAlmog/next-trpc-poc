"use client";
import { trpc } from "../_trpc/client";

const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery();
  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );
};

export default TodoList;
