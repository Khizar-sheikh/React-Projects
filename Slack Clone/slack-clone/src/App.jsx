import Header from './Components/Header/Header';
import "./App.css"
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ChatScreen from './Components/ChatScreen/ChatScreen';
import Login from './Components/Login/login';
import { useStatevalue } from './Components/Provider/StateProvider';
import { useEffect } from 'react';

const App = () => {
  const [{ user }, dispatch] = useStatevalue()

  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {

      dispatch({ type: 'SET_USER', user: JSON.parse(storedUser) });
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Routes>
                <Route path='/room/:roomId' element={<ChatScreen />} />
                <Route path='/' element={<>Welcome</>} />
              </Routes>
            </div>
          </>
        )}
      </Router>

    </div >

  )
}

export default App