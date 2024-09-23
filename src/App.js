import './App.css';
import Navbar from './components/Navbar/Navbar';
import RightContainer from './components/RightContainer/RightContainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div className='container-fluid shelterContainer'>
          <Sidebar />
          <RightContainer />
      </div>

    </div>
  );
}

export default App;
