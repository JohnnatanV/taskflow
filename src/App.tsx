import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTask] = useState<string[]>([]);

  const handleAdd = (task: string) => {
    setTask([...tasks, task]);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-4">Gestor de productividad</h1>
          <TaskInput onAdd={handleAdd} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
