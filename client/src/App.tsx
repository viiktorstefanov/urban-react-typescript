import './App.css';
import Footer from './components/Footer/Footer';
import RoutesWrapper from './routes/RoutesWrapper';

function App() {
  return (
    <>
    <main className='views'>
      <RoutesWrapper />
    </main>
    <Footer />
    </>
  );
}

export default App;
