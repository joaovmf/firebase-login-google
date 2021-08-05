import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import {useState} from 'react'
import Login from'./pages/Login'

function App() {
  //null para tela de login
  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.DisplayName,
      avatar: u.photoURL
    }
    setUser(newUser)
  }

  const handleLogout = () => {
    return setUser(null)
  }

  if (user === null) {
    return <Login onReceiveGoogle={actionLoginDataGoogle}/>
  }

  return (
    <BrowserRouter>
    <Header handleLogout={handleLogout} user={user}/>

    <Routes/>

    <Footer/>
    </BrowserRouter>
  );
}

export default App;
