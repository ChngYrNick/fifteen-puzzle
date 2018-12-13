
export default function winCheck(squares){
    Array.prototype.equals = function (array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;
    
        // compare lengths - can save a lot of time 
        if (this.length !== array.length)
            return false;
    
        for (var i = 0, l=this.length; i < l; i++) {
            // Check if we have nested arrays
            if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i]))
                    return false;       
            }           
            else if (this[i] !== array[i]) { 
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;   
            }           
        }       
        return true;
    }
    // Hide method from for-in loops
    Object.defineProperty(Array.prototype, "equals", {enumerable: false});

    var array1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
    if(squares.equals(array1) || squares.equals(array2)){
        return true;
    }else{
        return false;
    }
}