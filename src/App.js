import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <div className='section'>
        <UsersList />
      </div>
    </div>
  );
}

export default App;
