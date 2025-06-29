import { BrowserRouter } from 'react-router-dom';
import './i18n'; 
import AppRouter from './router/AppRouter';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app__content">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}