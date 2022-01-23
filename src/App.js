import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Counter from './pages/Counter';
import EmptyPage from './pages/EmptyPage';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
}

export default App;
