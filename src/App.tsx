import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Landing } from './pages/Landing/Landing';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Landing />
    </BrowserRouter>
  );
}

export default App;
