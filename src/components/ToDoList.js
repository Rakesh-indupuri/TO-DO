import Todo from "./Todo";

const ToDoList =({Filter,CompletedTask,DeleteTask})=>{
    return (
      <div>
        {Filter().length > 0 ? (
          Filter().map((todo) => (
            <Todo
            key={todo.id}
              todo={todo}
              CompletedTask={CompletedTask}
              DeleteTask={DeleteTask}
            />
          ))
        ) : (
          <p>No Tasks To Show!!</p>
        )}
      </div>
    );
};

export default ToDoList;