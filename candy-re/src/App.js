// where most of game lofic will be
// https://www.youtube.com/watch?v=PBrEq9Wd6_U


//...spread syntax,splitting into indi elemets 
import { useEffect, useState } from "react"
import ScoreBoard from "./components/ScoreBoard"


const width = 8  /*board will be 8x8 */
const candyColors=[
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow',
]


const App=() => {   /*called a constant expression*/
   const [currentColorArrangement, setCurrentColorArrangement] = useState([])
   const[squareBeingDragged, setSquareBeingDragged] = useState(null)
   const[squareBeingReplaced, setSquareBeingReplaced] = useState(null)
   const[scoreDisplay, setScoreDisplay] = useState(0)
   
   //loop over all sqaures until index 47
   const checkForColumnOfThree=()=>{
      for(let i=0;i<=47;i++){
         const columnOfThree =[i, i + width,i+width*2]
         const decidedColor= currentColorArrangement[i]
         const isBlank = currentColorArrangement[i]=== ''

         if(columnOfThree.every(square => currentColorArrangement[square]=== decidedColor && !isBlank)) {
           setScoreDisplay((score)=> score +3)
            columnOfThree.forEach(square=>currentColorArrangement[square] = '')
            return true

          }
      }
   }

   const checkForRowOfThree=()=>{
    for(let i=0;i<64;i++){
       const rowOfThree =[i, i +1, i +2]
       const decidedColor= currentColorArrangement[i]
       const notValid =[6, 7, 14, 15, 22, 23, 30, 31,38, 39, 46, 47, 54, 55, 62, 63, 64  ]  // in order to skip the last two columns, bc it makes no  sense to go ober them 
       const isBlank = currentColorArrangement[i]===''

       if (notValid.includes(i)) continue
       if(rowOfThree.every(square => currentColorArrangement[square]=== decidedColor && !isBlank)) {
        setScoreDisplay((score)=> score +3)
          rowOfThree.forEach(square=>currentColorArrangement[square] = '')
          return true

        }
    }
 }




   const checkForColumnOfFour=()=>{
    for(let i=0;i<=39;i++){
       const columnOfFour =[i, i + width,i+width*2,i+width*3 ]
       const decidedColor= currentColorArrangement[i]
       const isBlank = currentColorArrangement[i]===''

       if(columnOfFour.every(square => currentColorArrangement[square]=== decidedColor && !isBlank)) {
        setScoreDisplay((score)=> score +4)
          columnOfFour.forEach(square=>currentColorArrangement[square] = '')
          return true

        }
    }
 }

 const checkForRowOfFour=()=>{
  for(let i=0;i<64;i++){
    const rowOfThree =[i, i +1, i +2, i +3]
    const decidedColor= currentColorArrangement[i]
    const notValid =[5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64 ]  // in order to skip the last two columns, bc it makes no  sense to go ober them 
    const isBlank = currentColorArrangement[i]===''

    if (notValid.includes(i)) continue
    if(rowOfThree.every(square => currentColorArrangement[square]=== decidedColor  && !isBlank)) {
      setScoreDisplay((score)=> score +4)
       rowOfThree.forEach(square=>currentColorArrangement[square] = '')
       return true

      }
  }
}



const dragStart = (e)=>{
 setSquareBeingDragged(e.target)
 
}

const dragDrop = (e)=>{
 setSquareBeingReplaced(e.target)
 
}
 

const dragEnd = (e)=>{

  //minute 59

  const squareBeingDraggedId= parseInt(squareBeingDragged.getAttribute('data-id'))
  const squareBeingReplacedId= parseInt(squareBeingReplaced.getAttribute('data-id'))

  currentColorArrangement[squareBeingReplacedId]=squareBeingDragged.style.backgroundColor
  currentColorArrangement[squareBeingDraggedId]=squareBeingReplaced.style.backgroundColor

  const validMoves=[
    squareBeingDraggedId -1,
    squareBeingDraggedId -width,
    squareBeingDraggedId +1,
    squareBeingDraggedId +width,
  ]
  const validMove =validMoves.includes(squareBeingReplacedId)

   const isAColumnOfFour = checkForColumnOfFour()
   const isARowOfFour = checkForRowOfFour()
   const isAColumnOfThree = checkForColumnOfThree()
   const isARowOfThree = checkForRowOfThree()

   if(squareBeingReplacedId &&validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
    setSquareBeingDragged(null)
    setSquareBeingReplaced(null)
 }  else {
  currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.style.backgroundColor
  currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.style.backgroundColor
}
}


    //creating an array 0f 64 items for the board 
   const createBoard=()=>{
     const randomColorArrangement=[]
     for(let i =0; i<width*width; i++){
       const randomColor = candyColors[Math.floor(Math.random()* candyColors.length)]
       randomColorArrangement.push(randomColor)
      }
      setCurrentColorArrangement(randomColorArrangement)
    }

    const moveIntoSquareBelow = () => {
        for(let i=0;i<=55;i++){
          //if first row is blank, fill it in
          const firstRow=[0,1,2,3,4,5,6,7]
          const isFirstRow = firstRow.includes(i)
          if(isFirstRow && currentColorArrangement[i]===''){
           let randomNum= Math.floor(Math.random()* candyColors.length)
           currentColorArrangement[i]=candyColors[randomNum]
          }

          if((currentColorArrangement[i+width]) === ''){
            currentColorArrangement[i+width] = currentColorArrangement[i]
            currentColorArrangement[i]=''
          }
        }
    }



    

   // so that the board is only called once 
   useEffect(()=>{
    createBoard()
   },[])  


   
   //check the board every 100 milisecond bc board is always chnaging
   useEffect(()=>{
     const timer= setInterval(()=>{
      checkForColumnOfFour()
      checkForRowOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      moveIntoSquareBelow()
      setCurrentColorArrangement([...currentColorArrangement])
     },100)
     return() => clearInterval(timer)
  
   },[ checkForColumnOfFour, checkForColumnOfThree, checkForRowOfThree,checkForRowOfFour,moveIntoSquareBelow, currentColorArrangement])  


  // console.log(currentColorArrangement)



  return (
    <div className="app">
      <div className="game">
      {currentColorArrangement.map((candyColor, index) => (
        <img 
         key={index}
         style={{backgroundColor:candyColor}}
         alt={candyColor}
         data-id={index}
         draggable={true}
         onDragStart={dragStart}
         onDragOver={(e) => e.preventDefault()}
         onDragEnter={(e) => e.preventDefault()}
         onDragLeave={(e) => e.preventDefault()}
         onDrop={dragDrop}
         onDragEnd={dragEnd}
         />
      ))}
    </div>
    <ScoreBoard score={scoreDisplay}/>
    </div>
  )
 }

export default App; 
