const todokey = "ReactTodo";

export const getlocalTododata = () => {
  const rawTodos = localStorage.getItem(todokey);
  if (!rawTodos) return [];

  return JSON.parse(rawTodos);
};

export const setlocalTododata = (task) => {
  return localStorage.setItem(todokey, JSON.stringify(task));
};
