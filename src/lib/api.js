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