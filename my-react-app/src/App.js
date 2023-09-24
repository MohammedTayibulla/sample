import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import C1 from './C1';
import Home from './Home';
import Apple from './Apple';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/c1" element={<C1 />}></Route>
        <Route path="/apple" element={<Apple />} />

    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
