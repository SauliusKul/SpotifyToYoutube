import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router';
import { Navbar } from './components/Navbar/Navbar';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
