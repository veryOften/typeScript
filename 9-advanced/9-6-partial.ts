{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: Todo, fieldsTodUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsTodUpdate };
  }

  const todo: Todo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  updateTodo(todo, { priority: "low" });
}
