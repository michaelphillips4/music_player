
import List from './Pages/List';
import Home from './Pages/Home';
import Player from './Pages/Player';
import { Route, Routes } from 'react-router';
import Editor from './Pages/Editor';
import Gallery from './components/Gallery';
import Video from './components/Video';


const App = () => (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/player" element={<Player />} />
       <Route path="/editor" element={<Editor />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/video" element={<Video />} />
      <Route path="*" element={<Home />} />
    </Routes>
  
);

export default App;