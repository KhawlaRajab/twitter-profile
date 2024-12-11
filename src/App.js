import logo from './logo.svg';
import './App.css';
import LeftSide from './components/leftAside/LeftSide';
import Main from './components/mainSection/Main';
import RightSide from './components/rightAside/RightSide';

function App() {
  return (
    <div className="App">
    <LeftSide />
      <Main />
      <RightSide/>
    </div>
  );
}

export default App;
