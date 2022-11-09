import './App.css';
import UsersList from './components/UsersList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <div className='section'>
        <div> <UsersList /> </div>
        <div> < TodoList/> </div>
      </div>
    </div>
  );
}

export default App;
