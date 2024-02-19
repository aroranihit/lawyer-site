import logo from './logo.svg';
import './App.css';
import Form from './form';
import BackgroundPage from './BackgroundPage';
import MajorCases from './Majorcases';


function App() {
  return (
    <div className="App">
      <header className="App-header">
<BackgroundPage/>
     <Form/>
     <MajorCases/>
      </header>
    </div>
  );
}

export default App;
