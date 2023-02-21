import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, clearAll } from './actions';
import './App.css'

function App() {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <>
      <div>
        <h1>Add Your List Here </h1>
        <input type="text" placeholder='Write here'
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}>
        </input>
        <button onClick={() => dispatch(addTodo(inputData), setInputData(''))}>+</button>
      </div>

      <div>
          {list.map((e) => {
            return (
              <div className="list" key={e.id}>
                <h2>{e.data}</h2>
                <button onClick={() => dispatch(deleteTodo(e.id))}>Delete</button>
              </div>
            )
          })}
      </div>
      <hr></hr>
      <div className='button'>
        <button onClick={() => dispatch(clearAll())}>Clear</button>
      </div>
    </>
  )
}

export default App
