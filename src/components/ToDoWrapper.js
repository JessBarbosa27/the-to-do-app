import React, { useState } from "react";
import { TaskForm } from "./TaskForm";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./Task";
import { EditTaskForm } from "./EditTaskForm";
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (task) => {
    // alert("Are you sure you want to delete " + task.task + "?");
    setTodos(todos.filter((todo) => todo.id !== task.id));
  }

  const editToDo = (task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === task.id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo=> todo.id === id? {...todo,task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className="ToDoWrapper">
      <h1>Get Things Done!</h1>
      <TaskForm addToDo={addToDo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTaskForm editToDo={editTask} task={todo}/>
        ) : (
          <Task
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};
