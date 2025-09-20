type TaskListProps = {
  tasks: string[];
};

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No hay tareas aun</p>;
  }

  return (
    <ul className="mt-4 w-full max-w-md">
      {tasks.map((t, i) => (
        <li key={i} className="p-2 border-b">
          {t}
        </li>
      ))}
    </ul>
  );
}
