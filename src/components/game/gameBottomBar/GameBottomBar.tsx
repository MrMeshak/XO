import * as React from 'react';

export interface IGameBottomBarProps {
}

export default function GameBottomBar (props: IGameBottomBarProps) {

  

  return (
    <div className='m-6 grid grid-cols-3 gap-6'>
      <div className='py-2 text-dark-navy text-center bg-light-blue rounded-lg '>
        <h4 className=''>X (YOU)</h4>
        <p className='text-xl text-dark-navy font-bold '>14</p>
      </div>
      <div className='py-2 text-dark-navy text-center bg-silver rounded-lg '>
        <h4>TIES</h4>
        <p className='text-xl text-dark-navy font-bold '>32</p>
      </div>
      <div className='py-2 text-dark-navy text-center bg-light-yellow rounded-lg '>
        <h4>O (CPU)</h4>
        <p className='text-xl text-dark-navy font-bold '>11</p>
      </div>
    </div>
  );
}
