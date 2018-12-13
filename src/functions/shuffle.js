
export default function shuffle(array) {

    array.sort(() => 0.5 - Math.random());
  
    return array;
  }