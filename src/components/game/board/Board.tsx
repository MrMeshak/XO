import * as React from 'react';
import GameCard from '../gameCard/GameCard';

export interface IBoardProps {
}

export default function Board (props: IBoardProps) {

  

  return (
    <div className='w-full p-6 grid grid-cols-3 grid-rows-3 gap-6'>
      <GameCard currentPlayer='P1' value='' postion={1} isActive={true}/>
      <GameCard currentPlayer='P1' value=''postion={2} isActive={false}/>
      <GameCard currentPlayer='P1' value='P1' postion={3} isActive={true}/>
      <GameCard currentPlayer='P1' value='P2'postion={4} isActive={true}/>
      <GameCard currentPlayer='P1' value='' postion={5} isActive={true}/>
      <GameCard currentPlayer='P1' value='' postion={6} isActive={true}/>
      <GameCard currentPlayer='P1' value='P1'postion={7} isActive={true}/>
      <GameCard currentPlayer='P1' value='P2'postion={8} isActive={true}/>
      <GameCard currentPlayer='P1' value='P1'postion={9} isActive={true}/>
    </div>
  );
}
