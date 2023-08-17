import './App.css'
import { Route, Routes } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProjectPage from './pages/ProjectPage'

function App() {
    return (
    <div>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/project' element={<ProjectPage/>} />
        
      </Routes>
    </div>
  )
}

export default App
