
export default function switchCells(array,currentIndex,newCoord){
            array[newCoord] = array[currentIndex];
            array[currentIndex] = 0;
            return array;
}