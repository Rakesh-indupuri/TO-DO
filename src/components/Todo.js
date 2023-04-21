import {DragDropContext} from 'react-beautiful-dnd'

const Todo = ({ todo, CompletedTask, DeleteTask }) => {
  return (
    <div className="input_box">
      <input
        className="check-box"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => CompletedTask(todo.id)}
      />
      <div className="display_todos">
        <DragDropContext>
        <span className="input_task">{todo.task}</span>
        </DragDropContext>
        <button className="delete_btn" onClick={() => DeleteTask(todo.id)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const TodoList = ({ todos, CompletedTask, DeleteTask, onDragEnd }) => {
//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="todo-list">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {todos.map((todo, index) => (
//               <Draggable key={todo.id} draggableId={todo.id} index={index}>
//                 {(provided) => (
//                   <div
//                     className="input_box"
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <input
//                       className="check-box"
//                       type="checkbox"
//                       checked={todo.isCompleted}
//                       onChange={() => CompletedTask(todo.id)}
//                     />
//                     <div className="display_todos">
//                       <span className="input_task">{todo.task}</span>
//                       <button
//                         className="delete_btn"
//                         onClick={() => DeleteTask(todo.id)}
//                       >
//                         <i className="fa-solid fa-trash"></i>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default TodoList;
