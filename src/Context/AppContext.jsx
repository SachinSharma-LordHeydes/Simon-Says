import { createContext, useEffect, useState } from "react";


export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    
    // let colours=['red','green','blue','yellow'];
    const[colours,setColours]=useState(['red','green','blue','yellow']);
    const[gameStatus,setGameStatus]=useState(false);
    const[gameSeq,setGameSeq]=useState([]);
    const[usrSeq,setUsrSeq]=useState([]);
    const[level,setLevel]=useState(0);

    function getRandIndex() {
        return Math.floor(Math.random() * 4);
    }

    async function randBlink(randIndx) {
        const newColours = [...colours];
        newColours[randIndx] = 'pink';
        setColours(newColours);
        await new Promise(resolve => setTimeout(resolve, 250));
        setColours(['red', 'green', 'blue', 'yellow']);
        await new Promise(resolve => setTimeout(resolve, 250));
      }
    

     function getGameSeq() {
    const nextIndex = getRandIndex();
    setGameSeq((prev) => [...prev, nextIndex]);
  }

    function getUsrSeq(curr){
        setUsrSeq((prev)=>[
            ...prev,curr
        ]);
    }

    function nextLevel(){
        setLevel((prev) => prev + 1);
        setUsrSeq([]);
        getGameSeq();
    }

    function checkClicks(){
       if(usrSeq.length>0){
            let clickedBox=usrSeq.length-1;
            if(usrSeq[clickedBox]!=gameSeq[clickedBox]){
                console.log('game over');
                setLevel(0);
                setUsrSeq([]);
                setGameSeq([]);
                return;
            }
            if(usrSeq.length==gameSeq.length){
                console.log('Next Level');
                setTimeout(()=>{
                    nextLevel();
                },250);
            }
        }
    }

    useEffect(() => {
        if (gameStatus && gameSeq.length > 0) {
          gameSeq.forEach((element, i) => {
            setTimeout(() => {
              randBlink(element);
            }, i * 400);
          });
        }
      }, [gameSeq, gameStatus]);
    
      useEffect(() => {
        checkClicks();
      }, [usrSeq]);

    //   useEffect(() => {
    //     console.log(gameSeq, usrSeq);
    
    //     if (usrSeq.length > 0) {
    //       const clickedIndex = usrSeq.length - 1;
    //       if (gameSeq[clickedIndex] !== usrSeq[clickedIndex]) {
    //         console.log('Game over');
    //         setGameStatus(false);
    //       } else if (gameSeq.length === usrSeq.length) {
    //           console.log('Next Level');
    //             setUsrSeq([]); 
    //             setTimeout(()=>{
    //                 let randIndx=getRandIndex();
    //                 randBlink(randIndx);
    //             },500)
    //         }
    //     }
    //   }, [usrSeq, gameSeq]);
    



    const value={
        gameStatus,setGameStatus,
        gameSeq,setGameSeq,
        usrSeq,setUsrSeq,
        colours,setColours,
        level,setLevel,
        randBlink,getUsrSeq,
        getRandIndex,getGameSeq,
        checkClicks
    }

    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}
