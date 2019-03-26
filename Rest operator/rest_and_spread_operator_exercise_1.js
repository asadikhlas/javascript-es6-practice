
//Refactor the code using ES6 and the rest operator.


//ES5 CODE


// function totalDistance(distance1,distance2,distance3){
//     var distances = [distance1,distance2,distance3]
//     var total = 0;
//     for(var i = 0; i < distances.length;i++){
//         total += distances[i]
//     }
//     return total;
//  }
//  console.log(totalDistance(200,100,200))

//ES6 CODE

function totalDistance(distance1,distance2,distance3){
    const distances = [distance1,distance2,distance3]
    let total = 0;
    for(let i = 0; i < distances.length;i++){
        total += distances[i]
    }
    return total;
 }
 console.log(totalDistance(200,100,200))