const API_URL = "http://localhost:4000";

export async function getTodos() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }
  return res.json();
}

export async function addTodo(title) {
    const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({title}),
    });

    if (!res.ok) {
        throw new Error("Failed to add todo");
    }

    return res.json();
}

export async function deleteTodo(id) {
    const res = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",

    });

    if (!res.ok) {
        throw new Error("Failed to delete todo");
    }
}

export async function updateTodo(todo) {
  const res = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: todo.title,
      completed: !todo.completed,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update todo");
  }

  return res.json();
}

export async function toggleTodo(id, completed) {
  const res = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  return res.json();
}
