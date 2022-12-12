import { Header } from "./components/header";
import { Characters } from "./pages/Characters";
import { Locations } from "./pages/locations";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/Characters"} element={<Characters />} />
        <Route path={"/Locations"} element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
