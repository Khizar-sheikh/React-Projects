import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/login'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
