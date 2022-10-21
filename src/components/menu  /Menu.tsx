import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useGame } from '../../store/gameStore';
import { useGlobalUI } from '../../store/globalUIStore';


export interface IMenuProps {
}

export default function Menu (props: IMenuProps) {
  const setInitalGameStatePersonVsComputer = useGame(state => state.setInitialGameStatePersonVsComputer);
  const setInitalGameStatePersonVsPerson = useGame(state => state.setInitialGameStatePersonVsPerson)
  const resetGameHistory = useGame(state => state.resetGameHistory)
  const toggleMenu = useGlobalUI(state=>state.toggleMenuOpen)
  const [selectedMark,setSelectedMark] = useState<'P1' | 'P2'>('P1')  //P1 = 'X' P2 = 'O'
  
  const handleOButton = () => {
    setSelectedMark('P2')
  }

  const handleXButton = () => {
    setSelectedMark('P1')
  }

  const handleNewGameEasyComputerBtn = () => {
    setInitalGameStatePersonVsComputer({name: 'Player 1', value: selectedMark}, 'PERSON_VS_EASYCOMPUTER')
    resetGameHistory()
    toggleMenu()
  }

  const handleNewGameHardComputerBtn = () => {
    setInitalGameStatePersonVsComputer({name: 'Player 2', value: selectedMark}, 'PERSON_VS_HARDCOMPUTER')
    resetGameHistory()
    toggleMenu()
  }

  const handleNewGamePersonVsPersonBtn = () => {
    if(selectedMark === 'P1'){
      setInitalGameStatePersonVsPerson({name: 'Player 1', value: 'P1'},{name: 'Player 2', value: 'P2'})
    }else{
       setInitalGameStatePersonVsPerson({name: 'Player 2', value: 'P1'},{name: 'Player 1', value: 'P2'})
    } 
    resetGameHistory()
    toggleMenu()
  }



  return (
    <div className='w-full max-w-2xl'>
      <div className='flex justify-center my-9'>
        <span className='mr-2'><svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg></span>
        <span className=''><svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg></span>
      </div>
      <div className="mx-6 mb-4 rounded-xl bg-semi-dark-navy">
        <h3 className="p-6 text-lg text-silver text-center tracking-wider">PICK PLAYER 1'S MARK</h3>
        <div className='mx-6 h-16 p-2  grid grid-cols-2 bg-dark-navy rounded-xl' >
          <button onClick={handleXButton} className={`w-full flex items-center justify-center ${selectedMark === 'P2'? 'bg-dark-navy': 'bg-silver'} rounded-lg`}><span className=''><svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill={`${selectedMark === 'P1'? '#1A2A33': '#A8BFC9'}`} fill-rule="evenodd"/></svg></span></button>
          <button onClick= {handleOButton} className ={` w-full flex items-center justify-center ${selectedMark === 'P2'? 'bg-silver': 'bg-dark-navy'}  rounded-lg`}><span className=''><svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill={`${selectedMark === 'P1'? '#A8BFC9' :'#1A2A33'}`}/></svg></span></button>
        </div>
        <p className=' p-6 text-center text-silver text-sm tracking-wider opacity-50'>REMEMBER: X GOES FIRST</p>
      </div>
      <div className="w-full p-6">
        <button onClick={handleNewGameEasyComputerBtn} className='block p-3 mb-6 w-full text-lg text-dark-navy bg-light-yellow rounded-xl shadow-[0px_6px] shadow-light-yellow-shadow'>NEW GAME (VS EASY CPU)</button>
        <button onClick={handleNewGameHardComputerBtn} className='block p-3 mb-6 w-full text-lg text-dark-navy bg-light-yellow rounded-xl shadow-[0px_6px] shadow-light-yellow-shadow'>NEW GAME (VS HARD CPU)</button>
        <button onClick={handleNewGamePersonVsPersonBtn} className='block p-3 w-full text-lg text-dark-navy bg-light-blue rounded-xl shadow-[0px_6px] shadow-light-blue-shadow '>NEW GAME (VS PLAYER)</button>
      </div>
    </div>
  );
}
 