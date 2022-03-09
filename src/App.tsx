import GlobalStyle from './styles/global';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/index';
import Characters from './Pages/Characters/index';
import Movies from './Pages/Movies';
import Events from './Pages/Events';
import NotFound from './Pages/NotFound';

import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/* <GlobalStyle /> */}
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
