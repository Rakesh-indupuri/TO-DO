const Input=({AddTask,inputTodo,setInputTodo})=>
{
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      AddTask();
    }
  };
  
  const change_theme=()=>{
    let element = document.body
    element.classList.toggle("light-mode")
  }
    return (
      <div className="input_area">
        <button className="Change_btn" onClick={change_theme}>
          <i class="fa-solid fa-lightbulb"></i>
        </button>
        <input
          className="task_input"
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add Your Task!!"
        />
        <button className="add_btn" onClick={AddTask}>ADD</button>
      </div>
    );
};

export default Input;