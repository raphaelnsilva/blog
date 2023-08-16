import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAutentication';

// CONTEXT
import { AuthProvider } from './context/AuthContext';

// PAGES
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  // VALIDAÇÃO DE USUARIO LOGADO.
  const [ user, setUser ] = useState(undefined);
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  // usa o efeito de usuário validado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/post/create' element={<CreatePost />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
