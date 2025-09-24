
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import AdminLogin from "./pages/AdminLogin"
import AdminPost from "./pages/AdminPost"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import AuthRedirectRoute from './routes/AuthRedirectRoute'
import RequireAuth from './routes/RequireAuth'
import "./styles/_themes.scss"
import './styles/common.scss'
import "./styles/main.scss"
function App() {


  return (
    <ThemeProvider>

      <Routes>


        <Route path='/' element={<Home />} />
        <Route path="/admin/login" element={<AuthRedirectRoute Component={AdminLogin} />} />

        <Route path="/admin/post" element={<RequireAuth Component={AdminPost} />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
