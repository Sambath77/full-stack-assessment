import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/Navigation';
import Home from './components/routes/home/Home';

function App() {
  return (
    <Routes>
      <Route path='/full-stack-assessment' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
