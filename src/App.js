import { Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './components/NotFound';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/reactFortniteShop' element={<Layout />}>
          <Route index element={<Shop />}/>
          <Route path='/reactFortniteShop/about' element={<About />}/>
          <Route path='/reactFortniteShop/contacts' element={<Contacts />}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
