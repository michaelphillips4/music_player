

import List from './Pages/List';
import Home from './Pages/Home';
import Player from './Pages/Player';
import { Route, Routes } from 'react-router';
import Editor from './Pages/Editor';

const App = () => (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/player" element={<Player />} />
       <Route path="/editor" element={<Editor />} />
      <Route path="*" element={<Home />} />
    </Routes>
  
);

export default App;