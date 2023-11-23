import React, { useState } from 'react';

export const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setValue] = useState('');

  // Función para manejar cambios en el input
  const onInputChange = (event) => {
    setValue(event.target.value);
    console.log(inputValue);
  };

  // Función para manejar el envío del formulario
  const onSubmit = (event) => {
    const envio= {
        nombre: inputValue,
       visto: false
    }
    event.preventDefault();
    agregarTarea(inputValue)
    
   
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={inputValue}

          //escuchar lo que escribo
          onChange={onInputChange}
        />
        <button className='AgregarTarea' type="submit">Agregar tarea</button>
      </form>
    </div>
  );
};
