import './App.css';
import Main from './views/Main';
import Details from './components/Details';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Update from './views/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element= {<Main />} path='/project' default/>
        <Route element = {<Details />} path='/project/:id' />
        <Route element = {<Update />} path='/project/edit/:id' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
