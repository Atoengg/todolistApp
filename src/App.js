
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='flex flex-col justify-start w-1/2 my-12 mx-auto min-h-screen text-center bg-slate-800 rounded-lg pb-8'>
      <TodoList/>
    </div>
  );
}

export default App;
