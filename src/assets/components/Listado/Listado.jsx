import React, { useState } from "react";
import { AgregarTarea } from "../AgregarTarea/AgregarTarea";
import { useEffect } from "react";

export default function Listado() {
  const Item = ({ id, nombre, visto, marcarComoVisto, eliminarTarea }) => {
    return (
      <li className="task-item">
        {nombre}
        {visto ? "✅" : "⛔"}
        
        <button className="Marcar" onClick={() => marcarComoVisto(id)}>Marcar como Visto</button>
        <button className="Eliminar" onClick={() => eliminarTarea(id)}>Eliminar</button>
      </li>
    );
  };

  const initialTasks = [
    { id: 1, nombre: "Instalaciones necesarias", visto: true },
    // ... rest of your tasks
  ];

  

  
    
    const marcarComoVisto = (id) => {
        setTasks((prevTasks) => {
          return prevTasks.map((task) => {
            if (task.id === id) {
              // Use === for comparison, not =
              if (task.visto === false) {
                return { ...task, visto: !task.visto };
              }
            }
            return task;
          });
        });
      };

   // implementacion de persistencia
   const storedTasks = JSON.parse(localStorage.getItem("tasks")) || initialTasks;
   const [tasks, setTasks] = useState(storedTasks); 
 
   // Uso de persistencia
   useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks));
     alert("lista actualizada")
   }, [tasks]);
 

  const onAgregarTarea = (val) => {
    let valor = val.trim();
    if (valor.length < 1) return;
    

    const newTask = {
      id: tasks.length + 1,
      nombre: valor,
      visto: false,
    };

    setTasks([...tasks, newTask]);
  };

  const eliminarTarea = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Trabajo Final React 2023</h1>
      <h2>Lista de tareas del grupo 1</h2>
      <ol>
        <AgregarTarea agregarTarea={onAgregarTarea} />
        {tasks.map((task) => (
          <Item
            key={task.id}
            id={task.id}
            nombre={task.nombre}
            visto={task.visto}
            marcarComoVisto={marcarComoVisto}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ol>
    </div>
  );
}
