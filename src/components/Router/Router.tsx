import { Home } from '../../pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { pages } from '../../context/PageIndex';
import { Landing } from '../../pages/Landing/Landing';

export default function Router(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path={pages.landing} element={<Landing />} />
        <Route path={pages.home} element={<Home />} />
      </Routes>
    </>
  );
}
