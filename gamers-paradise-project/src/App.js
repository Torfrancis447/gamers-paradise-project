import './App.css';
import GameList from './components/GameList';
import Header from './Header';
import Search from './Search'

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <GameList/>
    </div>
  );
}

export default App;
