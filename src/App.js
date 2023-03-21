import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Notes/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </Router>
  );
}

export default App;
