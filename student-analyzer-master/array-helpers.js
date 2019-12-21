// Array Helper Functions

// 1. WRITE YOUR OWN VERSION OF THE INCLUDES METHOD (do not use array.includes)
// Function Name:   includes
// Parameters:      item: the item to search for
//                  anArray: the array to search in
// Purpose:         Search anArray for item.  Return true if item is in anArray, else return false.
// Return Value:    true or false, depending on whether item is in anArray
function includes() {
    let item = [];
    let anArray = [];
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return True;
        } else {
            return False;
        }
    }
}



// 2. WRITE YOUR OWN VERSION OF MATH.MIN (do not use Math.min)
// Function Name:   minItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The minimum value in anArray.

function minItem() {
    let anArray = [];
    for (let i = 0; i < anArray.length; i++) {
        let min = anArray[i];
        if (min < anArray[i]) {
            return min;
        }
    }
}


// 3. WRITE YOUR OWN VERSION OF MATH.MAX (do not use Math.max)
// Function Name:   maxItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The mmaximum value in anArray.

function maxItem() {
    let anArray = [];
    for (let i = 0; i < anArray.length; i++) {
        let max = anArray[i];
        if (max > anArray[i]) {
            return max;
        }
    }
}


// 4. WRITE A FUNCTION TO DETERMINE THE AVERAGE OF ARRAY ITEMS
// Function Name:   arrayAverage
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the average of the values in anArray.
// Return Value:    The average of the values in anArray.

function arrayAverage() {
    let anArray = [];
    let sum = 0;
    for (let i = 0; i < anArray.length; i++){
        if (sum += (maxItem + minItem)) {
            return sum/anArray.length;
        }
         
    }
    
}
