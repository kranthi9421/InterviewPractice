
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

const App = () => {
 
  const [todoText, setTodoText] = useState("");
 
  const [list, setList] = useState<Todo[]>([]);
 
  const [editId, setEditId] = useState<number | null>(null);
 
  const [editText, setEditText] = useState("");



  const addTodo = () => {


    setList(prev => [ ...prev, { id: Date.now(), text: todoText}]);
   
    setTodoText("");
 
  };

  const deleteTodo = (id: number) => {
    setList(prev => prev.filter(item => item.id !== id));
  };

  
  const updateTodo = (id: number) => {
   

    setList(prev => prev.map(item => item.id === id ? { ...item, text: editText} : item)
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <button onClick={addTodo}>
        Add
      </button>

      <div>
        {list.map(item => (
          <div key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={() => updateTodo(item.id)}>Update</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <button
                  onClick={() => {
                    setEditId(item.id);
                    setEditText(item.text);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteTodo(item.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
