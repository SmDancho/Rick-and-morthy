import {Header} from './components/header';
import {Characters} from './pages/Characters';
import {Locations} from './pages/locations';
import {Episodes} from './pages/Episodes';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/Characters'} element={<Characters />} />
        <Route path={'/Locations'} element={<Locations />} />
        <Route path={'/Episodes'} element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
