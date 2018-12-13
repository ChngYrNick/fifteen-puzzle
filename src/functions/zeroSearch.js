
export default function zeroSearch(array,currentIndex){
    var check = [];
    if (!((currentIndex +1) % 4)) {
        check = [-1, 4, -4];
      } else if (!((currentIndex) % 4)) {
        check = [1, 4, -4];
      } else {
        check = [-1, 1, -4, 4];
      }

      var start = 0;
      var end = 15;

      for (var i = 0; i < check.length; i++) {
        var newCoord = currentIndex + check[i]; // Возможная ячейка
        if (newCoord >= start && newCoord <= end) { // проверка 0 - 15
          if (!array[newCoord]) {
            return newCoord;
          }
        }
      }
      return null;
}