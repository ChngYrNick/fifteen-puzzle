

function isSolvable(array){

  let parity = 0;
  let gridWidth = Math.sqrt(array.length);
  let row = 0; // the current row we are on
  let blankRow = 0; // the row with the blank tile

  for (let i = 0; i < array.length; i++)
  {
      if (i % gridWidth == 0) { // advance to next row
          row++;
      }
      if (array[i] == 0) { // the blank tile
          blankRow = row; // save the row on which encountered
          continue;
      }
      for (let j = i + 1; j < array.length; j++)
      {
          if (array[i] > array[j] && array[j] != 0)
          {
              parity++;
          }
      }
  }

  if (gridWidth % 2 == 0) { // even grid
      if (blankRow % 2 == 0) { // blank on odd row; counting from bottom
          return parity % 2 == 0;
      } else { // blank on even row; counting from bottom
          return parity % 2 != 0;
      }
  } else { // odd grid
      return parity % 2 == 0;
  }
    
}


export default function shuffle(array) {
  do{
    console.log(isSolvable(array));
    array = array.sort(() => 0.5 - Math.random());
  }while(!isSolvable(array)) 
    return array;
  }