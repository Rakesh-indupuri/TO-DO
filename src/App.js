import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer'





function App()
{
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [inputTodo, setInputTodo] = useState("");
  const [filter,setFilter] = useState("")

 useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos));
 }, [todos]);
  
  

  
  const AddTask=(e)=>
  {
   inputTodo.length>0 ? setTodos([...todos,
    {
      task:inputTodo,
      id: Date.now().toString(),
      isCompleted:false
    }
  ]
  ) 
  : setTodos([...todos])
  
    setInputTodo("")
  }

  const DeleteTask=(deletedTodoID)=>
  {
  const remainingTodos = todos.filter((todo)=>todo.id!==deletedTodoID)
  
  setTodos(remainingTodos)
  }

  const CompletedTask=(taskID)=>
  {
    const completeTodo = todos.map((todo)=>{
      if(todo.id===taskID)
      {
        return{
          ...todo,
          isCompleted:!todo.isCompleted
        }
      }
      return todo;
      })
   
    setTodos(completeTodo)
  }

  const Filter=()=>
  {
    if(filter==="Active")
    {
    return todos.filter((todo)=>todo.isCompleted===false);
    }
    else if(filter==="Completed")
    {
      return todos.filter((todo)=>todo.isCompleted===true);
    }
    else{
      return todos;
    }
  }

  const ClearCompleted=()=>{
    let activeTodos = todos.filter((todo)=>!todo.isCompleted)
    
    setTodos(activeTodos)
  }

  const noOfTodos=()=>
  {
    let activeTodos = todos.filter((todo) => !todo.isCompleted);
    return activeTodos.length
  }

 
  return (
    <div className='container'>
    <Input
    AddTask={AddTask}
    inputTodo={inputTodo}
    setInputTodo={setInputTodo}
    />
    <ToDoList
      Filter={Filter}
      CompletedTask={CompletedTask}
      DeleteTask={DeleteTask}
    />
    <Footer 
    todos={todos}
    noOfTodos={noOfTodos}
    setFilter={setFilter}
    ClearCompleted={ClearCompleted}
    />
    </div>
  );
}

export default App;
