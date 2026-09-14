import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css'
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
const App = () => {

  return (
    <>
      <Box width="400px" sx={{ width: { xl: '1488ps' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box >
    </>
  )
}

export default App
