import './App.css';
import Main from './views/Main';
import Details from './components/Details';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element= {<Main />} path='/api/project' default/>
        <Route element = {<Details />} path='api/project/:id' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
