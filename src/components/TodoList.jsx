import React from 'react'

export default function TodoList(props) {
  const{completeTodo}= props
  let todoArr = props.todoArr.length >0 ? props.todoArr :JSON.parse(localStorage.getItem('todos'))
  return (
    <div className='todo-list'>
  <ul> 
    {todoArr && todoArr.length > 0? todoArr.map((el, i) =>(
      <li key={i}>
      <div claasName={el["done"]? "line-through" : null}>{el.title}</div>
      <div className='icon'>
        <i title="Complete"onClick={() =>completeTodo(i)} className={`fa fa-cloud {$el["done"] ? "green" : "blue"}`} />
        <i title="Delete" className="fa fa-trash "/>
      </div>
    </li>

    )) : null
  }
    
  </ul>
    </div>
   
  );
}
