import React from 'react';
import { useGame } from '../../../store/gameStore';
import { useGlobalUI } from '../../../store/globalUIStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


export interface IGameTopBarProps {
}

export default function GameTopBar (props: IGameTopBarProps) {
  const currentPlayer  = useGame(state => state.currentPlayer)
  const gameStatus = useGame(state => state.gameStatus)
  const resetBoard = useGame(state => state.resetBoard)
  const toggleMenu = useGlobalUI(state => state.toggleMenuOpen)
  

  const handleQuitBtn = () => {
    toggleMenu()
  }

  const handleNextRoundBtn = () => {
    resetBoard()
  }


  return (
    <>
    <div className='m-6 grid grid-cols-3 gap-6'>
      <div className='flex'>
        <span className=''><svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg></span>
        <span className=''><svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg></span>
      </div>
      <div className='h-10 px-4 flex items-center justify-center text-silver bg-semi-dark-navy rounded-lg shadow-[_0px_4px] shadow-semi-dark-navy-shadow'>
        <span className={gameStatus === 'INPROGRESS' ? 'mr-2' : 'hidden'}>
              {(currentPlayer === 'P1' ? 
                <svg viewBox="0 0 64 64" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#A8BFC9" fill-rule="evenodd"/></svg>
              :
                <svg viewBox='0 0 64 64' width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#A8BFC9"/></svg>
              )} 
        </span>
        <h4 className=''>{gameStatus === "INPROGRESS" ? 'TURN' : gameStatus}</h4>
      </div>
      <div className='flex justify-end'>
        {
          gameStatus !== 'INPROGRESS' ? (
            <>
              <button onClick={handleNextRoundBtn} className='hidden px-4 py-2 mr-2 font-bold text-dark-navy bg-light-yellow shadow-[_0px_4px] shadow-light-yellow-shadow rounded-lg sm:block '>NEXT ROUND <FontAwesomeIcon icon={faCaretRight} size="xl"/></button>
              <button onClick={handleNextRoundBtn} className='w-10 mr-2 bg-light-yellow shadow-[_0px_4px] shadow-light-yellow-shadow rounded-lg sm:hidden '><span className='font-bold text-dark-navy'><FontAwesomeIcon icon={faCaretRight} size="xl"/></span></button>
            </>
          ): null
        }
       
        <button onClick={handleQuitBtn} className='w-10 h-10 flex items-center justify-center bg-silver rounded-lg aspect-square shadow-[_0px_4px] shadow-silver-shadow '><svg viewBox='0 0 64 64' width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#1A2A33" fill-rule="evenodd"/></svg></button>
        
      </div>
    </div>
    </>
  );
}
