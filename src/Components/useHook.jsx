import React from 'react'

function useHook() {

    let colours=['red','green','blue','yellow'];

    const[gameStatus,setGameStatus]=useState('Start');
    const[gameSeq,setGameSeq]=useState([]);
    const[usrSeq,setUsrSeq]=useState([]);
    const[currColour,setCurrColour]=useState(colour);




    // function blinkGameSeq(){
    //     let randBox=Math.floor(Math.random()*4);
    //     setGameSeq((prev)=>[
    //     ...prev,randBox
    //     ]);
    //     gameSeq.forEach(() => {
    //         setCurrColour('black');
    //         setTimeout(()=>{
    //             setCurrColour(colour);
    //         },250);
    //     });
    // }

    // if(gameStatus=='Start'){
    //     blinkGameSeq();
    // }

    function blink(){
        setCurrColour('black');
        setTimeout(() => {
            setCurrColour(colour);
        }, 250);
    }

    function getUsrSeqHandler(event){
        // if(gameStatus=='Start'){
        //     console.log('Games is Off Please Start');
        //     return;
        // }//----->Correct code

        let clicked=event.target.id;
        setUsrSeq((prev)=>[
            ...prev,clicked
        ])

        // blink();

    };

    // useEffect(()=>{

    // })

  return []
}

export default useHook
