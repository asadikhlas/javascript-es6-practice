//OLD ES5 CODE
//REFACTOR THIS CODE INTO ES6
// function showItems(arg1,arg2,arg3){
//     var arr = [arg2,arg3].concat(arg1)
//     console.log(arr)
//  }
//  showItems(["dogs","cats"],"turtles","sharks");


 //ES6 CODE
 function showItems(arg1,...arg2){
     let arr = [...arg1,...arg2]
     console.log(arr)
 }
 showItems(["dogs","cats"],"turtles","sharks");