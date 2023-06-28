import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Divider from '@mui/material/Divider'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Divider variant="middle" />
      </div>
    </div>
  );
}

export default App;
