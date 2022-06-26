import React,{useState} from 'react';
import TodoList from './TodoList'
import swal from "sweetalert"



export default function CreateTodo() {
  const[todo, setTodo]=useState({title:"" ,done:false})
  const[todoArr, setTodoArr]=useState([])
  let todos=localStorage.hasOwnProperty("todos") ? JSON.parse(localStorage.getItem("todos")):[]
  const onChange =(event) =>{
    let{value}= event.target
    let obj ={}
    obj["title"]=value
    obj["done"]=false
    setTodo(obj)
  }
  const createTodo=(event) =>{
    const{name} =event.target
    if(event.key ==="Enter" ||name==="addTodo"){
      if(todo.title !==""){
        todos.unshift(todo)
        localStorage.setItem('todos',JSON.stringify(todos))
        setTodo({title:"",done:false})
      }
      else{
            swal("opps", "write todo first", "error")
      }
    }
  }

const completeTodo =(i) =>{
  if(todos[i]["done"]!==true){
    todos[i]["done"] = true
    localStorage.setItem('todos',JSON.stringify(todos))
    setTodoArr(todos)
    swal("task Complete");
  }
}

  return (
    <>
    <div className="box">
      <div className="text-end">
        <h2>React Todo App</h2>
        <p>Add a new todo</p>
      </div>
      <div className='text-addTodo'>
        <input type="text" name="todo" placeholder='write here...' value={todo.title} onKeyPress={createTodo} onChange={onChange}></input>
        <button className='btn-addTodo' type='button' name='addTodo' onClick={createTodo}>Add Todo</button>
      </div>
      
    </div>
    <TodoList todoArr={todoArr}
    completeTodo={completeTodo}/>
    </>
  )
}
