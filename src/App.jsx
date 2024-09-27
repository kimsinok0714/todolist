import './App.css'
import Header from '../components/Header';
import Editor from '../components/Editor';
import List from '../components/List';
import { useState, useEffect, useRef } from 'react';


function App() {

  const idRef = useRef(3);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 컴포넌트가 마운트 되었을때 
    const data = [
      {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime()
      },
      {
        id: 1,
        isDone: false,
        content: '빨래하기',
        date: new Date().getTime()
      },
      {
        id: 2,
        isDone: false,
        content: '대청소하기',
        date: new Date().getTime()
      }
    ];

    setTodos(data);

  }, []);


  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    };

    setTodos([newTodo, ...todos]);
  }


  const onUpdate = (targetId) => {

    setTodos(todos.map((todo) => {
      if (todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      } else {
        return todo;
      }
    }))

  }


  const onDelete = (targetId) => {
    
    setTodos(todos.filter((todo) => {
      return todo.id !== targetId;
    }))

  }



  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App
