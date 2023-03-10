import { Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './components/NotFound';
import { Layout } from './components/Layout';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Shop />}/>
          <Route path='about' element={<About />}/>
          <Route path='contacts' element={<Contacts />}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
