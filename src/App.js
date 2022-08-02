import logo from './logo.svg';
import './App.css';
import Addtodo from './Components/Addtodo/Addtodo';
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <Addtodo></Addtodo>
      <ToDoList></ToDoList>
   
    </div>
  );
}

export default App;
