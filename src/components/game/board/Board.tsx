import * as React from 'react';
import { useGame } from '../../../store/gameStore';
import GameCard from '../gameCard/GameCard';

export interface IBoardProps {
}

export default function Board (props: IBoardProps) {
  const board = useGame(state => state.board)
  const isInteractive = useGame(state => state.isInteractive)
  const currentPlayer = useGame(state =>  state.currentPlayer)
  const winner = useGame(state => state.winner)
  const makeMove = useGame(state =>state.makeMove)
  const gameStatus = useGame( state => state.gameStatus)
  const winState = useGame(state =>state.winState)

  return (
    <div className='w-full p-6 grid grid-cols-3 grid-rows-3 gap-6'>
      {board.map((value, index) => 
      <GameCard 
        value={value} 
        postion={index} 
        currentPlayer={currentPlayer}
        winner={winner} 
        isInteractive={isInteractive && gameStatus === 'INPROGRESS'}
        isInvertColors={winState.includes(index)} 
        makeMove={makeMove} 

        key={`GameCard ${index}`}
      />
      )}
    </div>
  );
}
