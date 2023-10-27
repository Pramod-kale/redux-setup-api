import './App.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './Redux/Slices/fetchTodo/fetchTodo.slice';
import { selectCounter } from './Redux/Slices/Counter/counter.selector';
import { setCounter } from './Redux/Slices/Counter/counter.slice';
import { selectFetchTodo, selectFetchTodoLoading } from './Redux/Slices/fetchTodo/fetchTodo.selector';






function App() {

  const counterData = useSelector(selectCounter)
  const todoItem = useSelector(selectFetchTodo)
  const todoItemLoading = useSelector(selectFetchTodoLoading)
  const dispatch = useDispatch()



  const onclickhandler = () => {
    dispatch(fetchTodos({ url: 2 }))
  }

  const handleCounterIncrement = () => {
    dispatch(setCounter(counterData + 1))
  }

  return (
    <div className="App">
      <br />
      <br />

      <button type="button" onClick={onclickhandler}>
        click me to hit api
      </button>

      <div>
        {!todoItemLoading && JSON.stringify(todoItem)}
        {todoItemLoading && 'Loading...'}
      </div>

      <br />
      <br />

      <button onClick={handleCounterIncrement}>
        click me to increment counter
      </button>
      <div>
        {counterData}
      </div>

    </div>
  );
}

export default App;
