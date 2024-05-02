"use client";
import { trpc } from "../_trpc/client";
import { useState } from "react";

const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery();
  const [content, setContent] = useState("");
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
      <div>
        <label htmlFor="content">content:</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-grow text-black bg-white rounded-md border-gray-300 shadow-sm mx-3 p-2"
        />
        <button
          onClick={async () => {
            if (content.length) {
              addTodo.mutate(content);
              setContent("");
            }
          }}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
