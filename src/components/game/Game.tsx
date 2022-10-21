import * as React from 'react';
import Board from './board/Board';
import GameBottomBar from './gameBottomBar/GameBottomBar';
import GameTopBar from './gameTopBar/GameTopBar';

export interface IGameProps {

}

export default function Game (props: IGameProps) {


  return (
    <>
      <div className='max-w-3xl'>
        <GameTopBar/>
        <Board/>
        <GameBottomBar/>
      </div>
    </>
  );
}
