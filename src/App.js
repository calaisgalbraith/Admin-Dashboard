import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div className='container-fluid shelterContainer'>
          <Sidebar />
          <div className="mainPanel">AA</div>
      </div>

    </div>
  );
}

export default App;
