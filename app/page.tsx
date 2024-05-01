import Image from "next/image";
import TodoList from "./_components/todo-list";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto mt-5">
      <TodoList />
    </main>
  );
}
