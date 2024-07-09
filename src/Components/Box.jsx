import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
function Box({colour,index}) {

  const {getUsrSeq,randBlink,checkClicks}=useContext(AppContext);

  function clickHandler(event){
    let clickedIndex=parseInt(event.target.id);
    getUsrSeq(clickedIndex);
    randBlink(clickedIndex);
    // checkClicks();
  }

  return (
    <div >
      <div 
        onClick={clickHandler}
        id={index}
        className={`w-9 h-9 bg-${colour}-500 m-2`}>

      </div>
    </div>
  )
}

export default Box
