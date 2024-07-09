import React, { useContext } from 'react'
import Box from './Box';
import { AppContext } from '../Context/AppContext';

function Boxes() {

  const{
    colours,gameStatus,setGameStatus,randBlink,getRandIndex,getGameSeq,level,setLevel
  }=useContext(AppContext);

  function startHandler(){

    if(gameStatus){
      console.log('Reset');
      setGameStatus(false);
    }else{
      if (gameStatus) {
        console.log('Reset');
        setGameStatus(false);
      } else {
        console.log('Start');
        setGameStatus(true);
        setLevel(0);
        getGameSeq();
      }
    }


  }

  return (
    <div>

      <div className="text-center m-5 font-bold text-5xl ">Simon Says</div>

      <div className="flex justify-center m-5">
        <button 
          onClick={startHandler} 
          className="border-2 border-black px-5 rounded-lg ">
            {
              gameStatus?(<div>Reset</div>):(<div>Start</div>)
            }
        </button>
        
      </div>

      <div className="flex justify-center m-5">
        Level {level}
      </div>

      <div className='flex justify-center flex-wrap'>
        {
          colours.map((colour,index)=>{
            return (
              <Box 
                colour={colour}
                index={index}
                key={index}
              >
              </Box>
            )
          })
        }
      </div>
    </div>
  )
}

export default Boxes
