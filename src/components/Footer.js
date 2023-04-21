const Footer = ({todos,noOfTodos, setFilter, ClearCompleted}) => {
  if (todos.length <= 0) {
    return;
  }
  return (
    <div className="foot_btns">
      <span className="task_number">{noOfTodos()} tasks remaining!</span>
      <button onClick={() => setFilter("All")} className="all_btn">All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={ClearCompleted} className="clearC_btn">Clear Completed Todos</button>
    </div>
  );
};

export default Footer;
