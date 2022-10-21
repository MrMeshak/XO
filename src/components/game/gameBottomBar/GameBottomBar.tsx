import React from 'react';
import { useGame } from '../../../store/gameStore';

export interface IGameBottomBarProps {
}

export default function GameBottomBar (props: IGameBottomBarProps) {
  const gameType = useGame(state => state.gameType)
  const gameHistory = useGame(state => state.gameHistory)
  const playerA = useGame(state => state.playerA)
  const playerB = useGame(state => state.playerB)
  const computer = useGame(state => state.computer)

  return (
    <div className='m-6 grid grid-cols-3 gap-6'>
      <div className='py-2 text-dark-navy text-center bg-light-blue rounded-lg '>
        <h4 className=''>X ({playerA.name})</h4>
        <p className='text-xl text-dark-navy font-bold '>{gameHistory.p1WinCount}</p>
      </div>
      <div className='py-2 text-dark-navy text-center bg-silver rounded-lg '>
        <h4>TIES</h4>
        <p className='text-xl text-dark-navy font-bold '>{gameHistory.drawCount}</p>
      </div>
      <div className='py-2 text-dark-navy text-center bg-light-yellow rounded-lg '>
        <h4>O ({gameType === 'PERSON_VS_PERSON'? playerB.name: computer.name })</h4>
        <p className='text-xl text-dark-navy font-bold '>{gameHistory.p2WinCount}</p>
      </div>
    </div>
  );
}
