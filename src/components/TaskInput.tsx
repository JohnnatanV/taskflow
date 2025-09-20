import { useState } from "react";

type TaskInputProps = {
  onAdd: (task: string) => void;
};

export function TaskInput({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe una tarea..."
        className="border rounded p-2 flex-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Añadir
      </button>
    </form>
  );
}
