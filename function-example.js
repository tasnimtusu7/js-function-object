function getAverage (assingment1, assingment2, assingment3){
    const total = assingment1+assingment2+assingment3;
    const average = total / 3;
    return average;
}
const assingmentMark1 = 55;
const assingmentMark2 = 41;
const assingmentMark3 = 45;

var myAverage = getAverage (assingmentMark1, assingmentMark2,assingmentMark3);
console.log("my average so far:", myAverage);