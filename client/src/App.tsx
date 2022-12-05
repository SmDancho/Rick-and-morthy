import {useEffect} from 'react';
import {useDispatch ,useSelector} from 'react-redux'
import {fetchCharacterData} from "./redux/getData/dataSlice"
import {RootState} from "./redux/store"

import {Header} from "./components/header"
import {Characters} from "./pages/Characters"
function App() {

  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(fetchCharacterData())
  },[])

  return (
    <div className="App">
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
