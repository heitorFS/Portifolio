import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
