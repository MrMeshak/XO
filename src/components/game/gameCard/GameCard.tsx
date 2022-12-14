
import React from 'react';

export interface IGameCardProps {
  postion: number;
  currentPlayer: 'P1' | 'P2';
  winner: 'P1' | 'P2' | '';
  value: string;
  isInteractive: boolean;
  isInvertColors: boolean;
  makeMove: Function;
}

export default function GameCard (props: IGameCardProps) {
  const {value, currentPlayer, winner, isInteractive, makeMove, isInvertColors} = props

  if(value){
    return (
      <button className={`w-full flex items-center justify-center aspect-square ${isInvertColors? (winner === 'P1'? 'bg-light-blue shadow-light-blue-shadow': 'bg-light-yellow shadow-light-yellow-shadow') : 'bg-semi-dark-navy rounded-lg  shadow-semi-dark-navy-shadow'} rounded-lg shadow-[_0px_7px] cursor-auto`}>
        {value === 'P1' ? 
          <svg viewBox="0 0 64 64" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill={isInvertColors?'#1F3641' :"#31C3BD"} fill-rule="evenodd"/></svg>
        : 
          <svg viewBox="0 0 64 64" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill={isInvertColors? '#1F3641':"#F2B137"}/></svg>
        }
      </button>
    )
  }
  
  return (
    <button onClick={() => makeMove(props.postion)} disabled={!isInteractive} className={`group w-full flex items-center justify-center aspect-square ${isInvertColors? (value === 'P1'? 'bg-light-blue shadow-light-blue-shadow' : 'bg-light-yellow shadow-light-yellow-shadow' ) : 'bg-semi-dark-navy shadow-semi-dark-navy-shadow'} rounded-lg shadow-[_0px_7px] `}>
          {currentPlayer === 'P1' ? 
              <svg className={`opacity-0  ${isInteractive? 'group-hover:opacity-100':''}`} viewBox='0 0 64 64' width="50%" height="50%" xmlns="http://www.w3.org/2000/svg"><path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z" stroke={isInvertColors? '#1F3641' : "#31C3BD"} stroke-width="2" fill="none"/></svg>
            :
              <svg className={`opacity-0  ${isInteractive? 'group-hover:opacity-100':''}`} viewBox='0 0 66 66' width="50%" height="50%" xmlns="http://www.w3.org/2000/svg"><path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke={`${isInvertColors? '#1F3641' : '#F2B137'}`} stroke-width="2" fill="none"/></svg>
          }
    </button>
  );
}
