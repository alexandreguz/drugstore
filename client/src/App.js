import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Medicine from './components/Medicine';
import AddMedicine from './components/AddMedicine';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="medicine" element={<Medicine />} />
        <Route path="addmedicine" element={<AddMedicine />} />

      </Routes>
    </div>
  );
}

export default App;
