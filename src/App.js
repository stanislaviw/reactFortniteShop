import { API_KEY, API_URL } from './config';
import { Header } from './components/Header';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
