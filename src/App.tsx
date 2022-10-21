import React from 'react';
import Game from './components/game/Game';
import Menu from './components/menu  /Menu';
import { useGlobalUI } from './store/globalUIStore';



function App() {
  const menuOpen = useGlobalUI(state => state.menuOpen)
  return (
    <div className='flex justify-center items-center'>
      {menuOpen? <Menu/>:<Game/>}
    </div>
  );
} 

export default App;
