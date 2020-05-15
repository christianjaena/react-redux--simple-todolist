import React from 'react'
import './AddTodo.css'

const AddTodo = ({ onInputChange, onButtonSubmit, input }) => {
   return (
      <div>
         <input
            type='text'
            onChange={onInputChange}
            value={input}
            placeholder='Add a task ...'
         />
         <button 
            className='add'
            onClick={onButtonSubmit}
         >+</button>
      </div>
   )
}

export default AddTodo
